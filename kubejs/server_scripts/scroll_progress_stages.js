// ====================== SCROLL PROGRESS SYSTEM ======================

const SCROLL_MAP = {
    'kubejs:scroll_iron_tier': 'iron_tier',
    'kubejs:scroll_redstone_tier': 'redstone_tier',
    'kubejs:scroll_gold_tier': 'gold_tier',
    'kubejs:scroll_diamond_tier': 'diamond_tier',
    'kubejs:scroll_culinary_tier': 'culinary_tier',
    'kubejs:scroll_brewing_tier': 'brewing_tier',
    'kubejs:scroll_create_tier': 'create_tier',
    'kubejs:scroll_create_trains_tier': 'create_trains_tier',
    'kubejs:scroll_firearms_tier': 'firearms_tier'
};

PlayerEvents.loggedIn(e => {
    if (!e.player.stages.has('base_tier')) {
        e.player.stages.add('base_tier');
    }
});

ItemEvents.rightClicked(event => {
    const { item, player, hand, server } = event;
    if (hand !== "MAIN_HAND") return;

    const stage = SCROLL_MAP[item.id];
    if (!stage) return;

    if (!player.isShiftKeyDown()) {
        player.tell('§cЗажми Shift + ПКМ для активации свитка');
        return;
    }

    if (player.stages.has(stage)) {
        player.tell('§eЭтот этап уже изучен!');
        return;
    }

    // Активация этапа
    player.stages.add(stage);
    player.stages.sync();

    server.tell(`§6[Прогресс] §f${player.username} §aизучил: §e${stage.replace('_', ' ').toUpperCase()}`);
    player.playSound('minecraft:entity.player.levelup', 1.0, 1.0);

    // === ИСПРАВЛЕННАЯ ЛОГИКА ПРОЧНОСТИ (на каждый свиток отдельно) ===
    let damage = item.getDamageValue();  // правильный метод
    damage++;

    if (damage >= 2) {
        item.shrink(1);
        player.tell('§cСвиток полностью разрушился.');
    } else {
        item.setDamageValue(damage);     // правильный метод
        
        // Обновляем отображение
        player.inventoryMenu.broadcastChanges();
        
        player.tell(`§7Осталось использований: §f${2 - damage}`);
    }
});