function solution(bandage, health, attacks) {
    const [skillTime, heal, plusHeal] = bandage;
    let hp = health;
    let time = 0;
    
    for(let i = 0; i < attacks.length; i++) {
        const [attackTime, damage] = attacks[i];
        let combo = 0;
        // 공격 받기 전 회복
        for(let j = time + 1; j < attackTime; j++) {
            if(hp >= health) {
                hp = health;
                break;
            }
            hp += heal;
            combo++;
            if(combo % skillTime === 0) hp += plusHeal;
        }
        // 공격
        time = attackTime;
        hp -= damage;
        if(hp <= 0) {
            hp = -1;
            break;
        }
    }
    
    
    return hp;
}