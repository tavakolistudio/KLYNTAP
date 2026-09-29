export type Product={slug:string;name:string;label:string;description:string;surface?:string;use:string};
export const products:Product[]=[
 {slug:'google-review',name:'KLYNTAP Review',label:'GOOGLE REVIEW',description:'Müşterilerinizi tek dokunuşla Google yorum sayfanıza yönlendirin.',use:'Restoran · Kafe · Klinik'},
 {slug:'instagram',name:'KLYNTAP Instagram',label:'SOCIAL ROUTE',description:'Profilinizi aratmadan, doğrudan paylaşın.',surface:'ice',use:'Salon · Stüdyo · Mağaza'},
 {slug:'whatsapp',name:'KLYNTAP WhatsApp',label:'DIRECT MESSAGE',description:'İletişimi doğru WhatsApp hattına yönlendirin.',use:'Hizmet · Emlak · Satış'},
 {slug:'digital-business-card',name:'KLYNTAP Profile',label:'DIGITAL PROFILE',description:'İletişim bilgilerinizi güncellenebilir bir profilde toplayın.',surface:'plum',use:'Ekip · Freelancer · Marka'},
 {slug:'nfc-menu',name:'KLYNTAP Menu',label:'MENU ROUTE',description:'Menünüzü masa başında, tek bağlantıyla açın.',surface:'ice',use:'Restoran · Kafe'},
 {slug:'wifi',name:'KLYNTAP Wi-Fi',label:'NETWORK ACCESS',description:'Misafir ağınıza sürtünmesiz erişim sağlayın.',use:'Otel · Ofis · Kafe'},
 {slug:'iban',name:'KLYNTAP IBAN',label:'PAYMENT ROUTE',description:'Ödeme bilgilerinizi tek dokunuşla paylaşın.',use:'Stüdyo · Hizmet'},
 {slug:'all-in-one',name:'KLYNTAP All-in-One',label:'MULTI DESTINATION',description:'Bağlantılarınızı tek bir yönetilebilir profilde birleştirin.',surface:'ice',use:'İşletme · Ekip'}];
