export class Contacto {
    first_name ='';
    second_name ='';
    email ='';
    connected = false;



    constructor (first_name, second_name, email, connected){
        this.first_name = first_name;
        this.second_name = second_name; 
        this.email = email;
        this.connected = connected;
    }
}
