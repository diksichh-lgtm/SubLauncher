ServerEvents.recipes(event => {
    console.log('[ScrollProgress] Starting precise recipe staging...');

    // ====================== IRON TIER ======================
    const ironTier = [
        // Инструменты
        'minecraft:iron_pickaxe', 'minecraft:iron_axe', 'minecraft:iron_sword', 
        'minecraft:iron_shovel', 'minecraft:iron_hoe',
        // Броня
        'minecraft:iron_helmet', 'minecraft:iron_chestplate', 'minecraft:iron_leggings', 'minecraft:iron_boots',
        // Блоки и ресурсы
        'minecraft:iron_block', 'minecraft:iron_ingot', 'minecraft:iron_nugget',
        'minecraft:iron_door', 'minecraft:iron_trapdoor', 'minecraft:iron_bars',
        // Медь
        'minecraft:copper_block', 'minecraft:copper_ingot', 'minecraft:cut_copper',
        'minecraft:copper_door', 'minecraft:copper_trapdoor',
        // Разное
        'minecraft:bucket', 'minecraft:cauldron', 'minecraft:anvil', 
        'minecraft:chain', 'minecraft:lantern', 'minecraft:shears'
    ];

    ironTier.forEach(item => {
        event.forEachRecipe({ output: item }, r => r.stage('iron_tier'));
    });

    // ====================== REDSTONE TIER ======================
    const redstoneTier = [
        'minecraft:redstone', 'minecraft:redstone_block', 'minecraft:comparator',
        'minecraft:repeater', 'minecraft:piston', 'minecraft:sticky_piston',
        'minecraft:observer', 'minecraft:dispenser', 'minecraft:dropper',
        'minecraft:hopper', 'minecraft:powered_rail', 'minecraft:detector_rail'
    ];

    redstoneTier.forEach(item => {
        event.forEachRecipe({ output: item }, r => r.stage('redstone_tier'));
    });

    // ====================== GOLD TIER ======================
    const goldTier = [
        'minecraft:gold_ingot', 'minecraft:gold_block', 'minecraft:gold_nugget',
        'minecraft:golden_helmet', 'minecraft:golden_chestplate', 
        'minecraft:golden_leggings', 'minecraft:golden_boots',
        'minecraft:golden_pickaxe', 'minecraft:golden_axe', 
        'minecraft:golden_sword', 'minecraft:golden_shovel', 'minecraft:golden_hoe'
    ];

    goldTier.forEach(item => {
        event.forEachRecipe({ output: item }, r => r.stage('gold_tier'));
    });

    // ====================== DIAMOND TIER ======================
    const diamondTier = [
        'minecraft:diamond', 'minecraft:diamond_block',
        'minecraft:diamond_pickaxe', 'minecraft:diamond_axe', 
        'minecraft:diamond_sword', 'minecraft:diamond_shovel', 'minecraft:diamond_hoe',
        'minecraft:diamond_helmet', 'minecraft:diamond_chestplate', 
        'minecraft:diamond_leggings', 'minecraft:diamond_boots'
    ];

    diamondTier.forEach(item => {
        event.forEachRecipe({ output: item }, r => r.stage('diamond_tier'));
    });

    // ====================== МОДЫ ======================

    // Create
    event.forEachRecipe({ mod: 'create' }, r => r.stage('create_tier'));
    event.forEachRecipe({ mod: 'steam_rails' }, r => r.stage('create_trains_tier'));

    // Еда
    event.forEachRecipe({ mod: 'farmersdelight' }, r => r.stage('culinary_tier'));
    event.forEachRecipe({ mod: 'delightful' }, r => r.stage('culinary_tier'));
    event.forEachRecipe({ mod: 'aquaculturedelight' }, r => r.stage('culinary_tier'));
    event.forEachRecipe({ mod: 'spanishdelight' }, r => r.stage('culinary_tier'));
    event.forEachRecipe({ mod: 'veggiesdelight' }, r => r.stage('culinary_tier'));

    // Варка
    event.forEachRecipe({ mod: 'vinery' }, r => r.stage('brewing_tier'));
    event.forEachRecipe({ mod: 'brewery' }, r => r.stage('brewing_tier'));
    event.forEachRecipe({ mod: 'herbalbrews' }, r => r.stage('brewing_tier'));

    // TACZ
    event.forEachRecipe({ mod: 'tacz' }, r => r.stage('firearms_tier'));

    console.log('[ScrollProgress] Precise staging completed!');
});