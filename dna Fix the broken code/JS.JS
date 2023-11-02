const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA >= 35) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA >= 14) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA >= 6) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA >= 3) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA >= 1) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'

console.log(whatRelation(100))
