function solution(skill, skill_trees) {
    // 정규식으로 skill이 아닌 문자 삭제
    const regex = new RegExp(`[^${skill}]`, 'g')
    const trees = skill_trees.map(i => i.replace(regex, ""))
    
    // skill에 포함되면서 맨 처음 스킬로 시작하는 스킬트리 개수 구하기
    return trees.filter(i => skill.startsWith(i)).length;
}