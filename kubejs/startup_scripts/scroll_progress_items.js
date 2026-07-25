StartupEvents.registry('item', event => {
    const scrolls = [
        ['iron_tier', 'Железные инструменты и броня'],
        ['redstone_tier', 'Редстоун-инженерия'],
        ['gold_tier', 'Алхимия и богатство'],
        ['diamond_tier', 'Алмазный уровень'],
        ['culinary_tier', 'Мастер-повар'],
        ['brewing_tier', 'Виноделие и варка'],
        ['create_tier', 'Базовый Create'],
        ['create_trains_tier', 'Железнодорожная эпоха'],
        ['firearms_tier', 'Огнестрельное оружие (TACZ)']
    ];

    scrolls.forEach(([id, name]) => {
        event.create(`scroll_${id}`)
            .displayName(`§dСвиток: §f${name}`)
            // Принудительно ставим одну конкретную текстуру на все предметы
            .texture('kubejs:item/scroll_iron_tier') 
            .rarity('epic')
            .glow(true)
            .unstackable()
            .maxDamage(2)
            .tooltip('§7Shift + ПКМ — изучить этап')
            .fireResistant();
    });
});

console.log('[ScrollProgress] Items registered! (single flat texture enforced)');
