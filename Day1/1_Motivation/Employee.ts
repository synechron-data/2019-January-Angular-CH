class MyEmployee {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }
}

var e1 = new MyEmployee("Manish");
console.log(e1.getName());
e1.setName("Abhijeet");
console.log(e1.getName());

var e2 = new MyEmployee("Subodh");
console.log(e2.getName());
e2.setName("Ramakant");
console.log(e2.getName());