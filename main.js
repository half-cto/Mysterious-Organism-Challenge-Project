// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(specimenNum, dna) {
  return {
    _specimenNum: specimenNum,
    _dna: dna,
    mutate: function() {
      //Get index of base that will mutate
        let mutateBaseIndex = Math.floor(Math.random() * 15)  
      //Assign new base that is !== to previous -> mutate!!!  
        this._dna[mutateBaseIndex] = ['A', 'T', 'C', 'G'].filter(x => x !== this._dna[mutateBaseIndex])[Math.floor(Math.random() * 3)]
        return this._dna;
    },

    compareDNA: function(compareSample) {
      let matchCount = 0;
      // run loop to compare samples and count matching bases
      for (let i = 0; i < 15; i++) {
        this._dna[i] === compareSample._dna[i] ? matchCount++ : null
      }
      return `sample # ${this._specimenNum} and sample # ${compareSample._specimenNum}  has ` + Math.round(matchCount / .15) + '% DNA in common';
    },

    willLikelySurvive: function(){
      //create new aray from this. containing only 'C' and 'G' bases, then use lenght of array to calculate % and if sample will suvive
      return this._dna.filter(x => ['C', 'G'].includes(x)).length / .15 >= 60 ? true : false
    }
  }
}

//Create array of 30 strands that are capable to survive
let sampleCollection30 = [];  
for (let i = 1; i < 31; i++) {
  let newStrand = pAequorFactory(i, mockUpStrand())
  newStrand.willLikelySurvive() ? sampleCollection30.push(newStrand) : i--
}







