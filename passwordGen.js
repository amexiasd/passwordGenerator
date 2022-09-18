class PasswordGenerator {
	constructor(length, capital,lower,numbers,symbols) {

    this.length = length
    this.capital = capital
    this.lower = lower
    this.numbers = numbers
    this.symbols = symbols
		this.selectedChars = [];
    this.lastPassword=''
    this.initialize()
	}

	initialize = function () {
    this.selectedChars = []
		let capitalLetters =[]
    let lowerLetters = []

    let nums = "1234567890".split("")
    let syms = "!@#$%^&*()_+-=[]{};:'/|\"/?.>,<".split('')

    for (let i=97;i<123;i++){
      lowerLetters.push(String.fromCharCode(i));
    }
    for (let i=65;i<91;i++){
      capitalLetters.push(String.fromCharCode(i));
    }

    if(this.capital){
    this.selectedChars.push(...capitalLetters);
    }

    if(this.lower){
    this.selectedChars.push(...lowerLetters);
    }

    if (this.numbers){
      this.selectedChars.push(...nums);
    }

    if(this.symbols){
      this.selectedChars.push(...syms)
    }
	};

  generate(){
    this.lastPassword=''
    for(let i = 0; i < this.length; i++){
      this.lastPassword+=utils.randomFromArray(this.selectedChars);

    }
    return this.lastPassword;
  }
}
