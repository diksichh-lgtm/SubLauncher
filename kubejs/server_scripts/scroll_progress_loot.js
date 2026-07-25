LootJS.modifiers(event => {
    // Обычные свитки (верхний мир)
    const overworldScrolls = [
        'kubejs:scroll_iron_tier', 
        'kubejs:scroll_redstone_tier', 
        'kubejs:scroll_gold_tier',
        'kubejs:scroll_diamond_tier', 
        'kubejs:scroll_culinary_tier', 
        'kubejs:scroll_brewing_tier'
    ];

    const villageAndMore = [
        'minecraft:chests/village/village_weaponsmith',
        'minecraft:chests/village/village_armorer',
        'minecraft:chests/village/village_toolsmith',
        'minecraft:chests/village/village_temple',
        'minecraft:chests/village/village_cartographer',
        'minecraft:chests/village/village_fletcher',
        'minecraft:chests/simple_dungeon',
        'minecraft:chests/pillager_outpost',
        'minecraft:chests/shipwreck_treasure'
    ];

    villageAndMore.forEach(table => {
        event.addLootTableModifier(table).apply(ctx => {
            overworldScrolls.forEach(scroll => {
                ctx.addLoot(Item.of(scroll).withChance(0.25));
            });
        });
    });

    // ====================== NETHER SCROLLS ======================
    const netherScrolls = [
        'kubejs:scroll_create_tier', 
        'kubejs:scroll_create_trains_tier', 
        'kubejs:scroll_firearms_tier'
    ];

    // Высокий шанс в бастионах
    event.addLootTableModifier('minecraft:chests/bastion_treasure').apply(ctx => {
        netherScrolls.forEach(scroll => {
            ctx.addLoot(Item.of(scroll).withChance(0.7));  // 100% шанс
        });
    });

    event.addLootTableModifier('minecraft:chests/bastion_other').apply(ctx => {
        netherScrolls.forEach(scroll => {
            ctx.addLoot(Item.of(scroll).withChance(0.8));
        });
    });

    event.addLootTableModifier('minecraft:chests/bastion_bridge').apply(ctx => {
        netherScrolls.forEach(scroll => {
            ctx.addLoot(Item.of(scroll).withChance(0.7));
        });
    });

    console.log('[ScrollProgress] Loot modifiers loaded!');
});