// import { Laptop, OS, BitKind, Keyboard, KeyboardKind, KeyboardLayout, NetworkInterfaceCard, Display, HardDisk } from "./composition-divine.ts";
// const myLaptopDisplay = new Display();
// const newKeyboard = new Keyboard();
// newKeyboard.kind = "external";
// newKeyboard.layout = "Qwerty";

// myLaptopDisplay.displaySize = 15;
// myLaptopDisplay.displayType = "amoled";

// const myLaptop = new Laptop(newKeyboard, {type: "x64"}, myLaptopDisplay, {name: "Realtek"}, {type: "windows"}, {type: "ssd"})

// const newLaptopDisplay = new Display();
// newLaptopDisplay.displaySize = 17;
// newLaptopDisplay.displayType = "lcd";

// console.log(myLaptop);
// myLaptop.update("display", newLaptopDisplay);
// myLaptop.update("nic", "Intel");
import { Laptop, Keyboard, KeyboardKind, KeyboardLayout, BitKind, Display, DisplayType, NetworkInterfaceCard, HardDisk, HardDiskType, OS} from "./composition-divine.ts";

const display = new Display();
display.displaySize = 16; 
display.setDisplayType("amoled");

const nic = new NetworkInterfaceCard("nitlap");

const hardDisk = new HardDisk("ssd", 512);
 
const keyboard1 = new Keyboard("in-built", "Qwerty");

const keyboard2 = new Keyboard("external", "Qwertz");

const operatingSystem = new OS("Windows", 10);


const myLaptop = new Laptop([keyboard1, keyboard2],"x64", display, nic, operatingSystem, hardDisk);
myLaptop.displayLaptopSpecifications();



//Update Laptop
const newDisplay = new Display();
newDisplay.displaySize = 18;
newDisplay.setDisplayType("lcd");
const keyboard3 = new Keyboard("on-screen", "Qwerty");
const newOs = new OS("Linux",8 );

myLaptop.update("display", newDisplay);
myLaptop.update("keyboard", keyboard3);
myLaptop.update("os", newOs);
myLaptop.showAllUpdateLogs();

myLaptop.displayLaptopSpecifications();