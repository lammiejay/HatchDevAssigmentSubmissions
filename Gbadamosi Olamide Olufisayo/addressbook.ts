class Person {
    name: string;
    phoneNumber: number;
    address: string;

    constructor(name: string, phoneNumber: number, address: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

}

type link = "Family" | "Work" | "School" | "Friend" | "Emergency";

class Contact extends Person{
    relationship: link;

    constructor(name: string, phoneNumber: number, address: string, relationship: link) {
        super(name, phoneNumber, address);
        this.relationship = relationship;
    }
    
    getName() {
        console.log("Name: ", this.name);
    }

    getPhoneNumber() {
        console.log("Phone Number: ", this.phoneNumber);
    }

    getAddress() {
        console.log("Address: ", this.address);
    }
    
// Method to display Contact details
    displayDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Phone Number: ${this.phoneNumber}`);
        console.log(`Address: ${this.address}`);
        console.log(`Relationship: ${this.relationship}`);
    }

}

class AddressBook {
    private contacts: Contact[] = [];

    createContact(contact: Contact ) {
        this.contacts.push(contact);
    }

}

const myContacts = new AddressBook();
myContacts.createContact(new Contact("Tomi", 48921, "Old Kent Road", "Family"));
myContacts.createContact(new Contact("David", 49218, "Whitechapel", "Friend"));
myContacts.createContact(new Contact("Police", 911, "Fenchurch Station", "Emergency"));

console.log(myContacts);
console.log("--");

const mathsGuy = new Contact("Mr. Chinedu", 48921, "Old Kent Road", "School");
mathsGuy.displayDetails();
console.log("--");

mathsGuy.getName();
