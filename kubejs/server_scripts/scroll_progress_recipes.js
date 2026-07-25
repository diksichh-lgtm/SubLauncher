ServerEvents.recipes(event => {
    const scrolls = [
        'iron_tier', 'redstone_tier', 'gold_tier', 'diamond_tier',
        'culinary_tier', 'brewing_tier', 'create_tier',
        'create_trains_tier', 'firearms_tier'
    ];

    scrolls.forEach(tier => {
        event.shapeless(`2x kubejs:scroll_${tier}`, [
            `kubejs:scroll_${tier}`,
            'minecraft:paper',
            'minecraft:ink_sac',
            'minecraft:feather'
        ]).id(`kubejs:duplicate_scroll_${tier}`);
    });

    console.log('[ScrollProgress] Scroll duplication recipes registered!');
});