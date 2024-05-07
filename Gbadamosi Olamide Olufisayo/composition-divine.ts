class Laptop{
    powerState: boolean = false
    allUpdateLogs: string[] = [];

    constructor(public keyboard: Keyboard[],
        public bit: BitKind,
        public display: Display,
        public nic: NetworkInterfaceCard,
        public os: OS,
        public harddisk: HardDisk)
    {
        this.powerState = false;
    }

    switchOn() {
        this.powerState = true
    }

    shutDown(){
        this.powerState = false
    }
    private updateDisplay(newValue: Display): void{
        if(!(newValue instanceof Display)){
            throw new Error("Invalid input. The new value must be of instance Display");
        }
        this.display = newValue;
        this.allUpdateLogs.push(`Display updated: Type - ${newValue.type}, Size - ${newValue.size} `);
        
    }

    private updateNic(newValue: string): void{
        if(typeof newValue !=="string"){
          throw new Error("Invalid input : The new nic value must be a string");
        }
        this.nic.name = newValue;
        this.allUpdateLogs.push(`NIC updated: ${newValue}`);
    }

    private updateHardDisk(newValue : HardDisk){
        if(!(newValue instanceof HardDisk)){
            throw new Error("Invalid input. The new value must be an instance of HardDisk");
        }
        this.harddisk = newValue;
        this.allUpdateLogs.push(`Hard Disk updated: type - ${newValue.type}, size - ${newValue.size}`);
    }

    private updateKeyboards(newValue: Keyboard){
        if(!(newValue instanceof Keyboard)){
           throw new Error("Invalid input. The new value must be an instance of Keyboard");
        }
        this.keyboard.push(newValue);
        this.allUpdateLogs.push(`Keyboard updated: ${newValue.kind} keyboard with ${newValue.layout} layout`);
    }

    private updateOs(newValue: OS){
        if(!(newValue instanceof OS)){
            throw new Error("Invalid input :  The new value must be an instance of OS");
        }
        this.os = newValue;
        this.allUpdateLogs.push(`Operating System updated: Kind: ${newValue.kind}, Version - ${newValue.version}`);
    }


    update<T extends Updates>(thingToUpdate: T, newValue: UpdateValue<T>){
        switch(thingToUpdate){
            case "keyboard":
                if(newValue instanceof Keyboard){
                    this.updateKeyboards(newValue);
                }
                break;
            
            case "nic":
                if(typeof newValue == "string"){
                    this.updateNic(newValue);
                }
                break;

            case "display" :
                if(newValue instanceof Display){
                    this.updateDisplay(newValue);
                }
                break;

            case "hardDisk":
                if(newValue instanceof HardDisk){
                    this.updateHardDisk(newValue);
                }
                break;

            case "os":
                if(newValue instanceof OS){
                    this.updateOs(newValue);
                }
                break;   
            
            default:
                console.log("Invalid input")
        }
    }

    displayLaptopSpecifications(){
        console.log(`\nLaptop Specifications: \nBit size : ${this.bit} \nDisplay Type : ${this.display.type} 
        \nDisplay Size : ${this.display.size} \nNetwork Interface Card : ${this.nic.name} \nHard Disk Type : ${this.harddisk.type} 
        \nHard Disk Size : ${this.harddisk.size} \nOperating System : ${this.os.kind} 
        \nOperating System Version : ${this.os.version}\n `);
        this.keyboard.forEach((keyboard, index) => {
            console.log(`Keyboard ${index + 1}: \n\t Type : ${keyboard.kind} \n\t Layout : ${keyboard.layout}`);
        }) 
    }

    showAllUpdateLogs(){
        console.log("\nAll updates made: \n" + this.allUpdateLogs.join("\n"));
    }

}

class Keyboard{
    constructor(public kind: KeyboardKind, public layout : KeyboardLayout){}

}


class NetworkInterfaceCard{
    constructor(public  name : string){ 
    }
}

class Display{
    size : number;
    type: DisplayType;

    set displaySize(val: number){  
        this.size = val;
    }
    setDisplayType(type: DisplayType){ 
        this.type = type;
    }
}

class HardDisk{
    constructor(public type: HardDiskType, public size: number){

    }
}

class OS{
    constructor(public kind: OsKind, public version: number){}
}


type KeyboardKind = "in-built" | "external" | "on-screen";


type KeyboardLayout = "Qwerty" | "Qwertz" | "Azerty";


type OsKind = "Linux" | "Mac" | "Windows";

type BitKind = "x64" | "x32" | "x86";

type DisplayType = "amoled" | "lcd" | "oled";

type HardDiskType = "ssd"  | "hdd"

type Updates = "nic" | "os" | "display" | "keyboard" | "hardDisk";

type UpdateValue<T extends Updates> =
        T extends "keyboard" ? Keyboard: //if thing to update T is keyboard, then UpdateVale<T> is of type KeyBoard
        T extends "nic" ? string:
        T extends "display" ? Display:
        T extends "hardDisk" ? HardDisk:
        T extends "os" ? OS : never;



export {Laptop, OS, Keyboard, NetworkInterfaceCard, Display, HardDisk};
export type { BitKind, KeyboardKind, KeyboardLayout, HardDiskType, DisplayType }