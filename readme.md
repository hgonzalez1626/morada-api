# API Morada App

## Modules
-USER
-PROPERTIES

## API References

### USER

Method | Endpoint       | Data                     | Auth Required              | Comments | Status
------ | --------       | -----------
`POST` | /signup         | body: { name, email, 
                          movil, password, 
                          Confirmpass, TypeUser }  | No                         | Registrer new User. For example: Hector Gonzalez, hgonzalez1626@xxx.com, 3156569245, Pass: xxxxxx, CPass: xxxxxx,    
                                                                                    TypeUserAdmin= 2 | Ok.
`GET`  | /login         | body: { email, password }| No                         | Login to aplication; for example: hgonzalez1626@xxx.com, Pass: xxxxxx | Ok.
`GET`  | /login/forget  | body: { email, movil }   | No                         | Forget to password; example: hgonzalez1626@xxx.com, 315689854 Send E-Mail to hgonzalez1626@xxx.com for restore your password        | Ok.

`PUT`  | /login/forget  | body: { email, password,
                             Confirmpass }         | No                         | Restore to password; for example: hgonzalez1626@xxx.com, Pass: xxxxxx, CPass: xxxxxx                        | Ok.

`PUT` | /signup         | body: { name, email, 
                          movil, password, 
                          Confirmpass, TypeUser }  | Si                         | Update User. For example: Hector Gonzalez, hgonzalez1626@xxx.com, 3156569245, Pass: xxxxxx, CPass: xxxxxx, TypeUser= 2-Admin | Ok.

`PUT` | /signup:id | url: id                   | Si                         | Inactive user; for example ID: 120023 | Ok.




## Propiedades

Method   | Endpoint     | Data                      | Auth Required              | Comments                        | Status
------   | --------     | -----------               | ---------------------      | --------------------------------| ---------------------
`POST`   | /properties    | body: { zone, type, 
                          bussinesstype, value, 
                          image }                   | Si                         | Save to property new; for example: 1155-zone, 2-type,   
                                                                                   1-BussinessType, 2.000.000-valor, image  | Ok.
`POST`   | /properties:id | body: { comments }      | Si                         | Save the properties than like users or add to favorites with any comments; for example: Property with ID is:5264 Comments:   
                                                                                   "This House have to Garden" Thanks. | Ok.

`GET`    | /properties:id | url: id                   | No                         | Consult to Property especifique; for example:  Property with ID is: 52654 | Ok.

`GET`    | /properties    | query: type, businessType | No                         | Consult all properties for t and Bt; for example: type = 2-house, and BussinessType = 1-Rent | Ok.


`PUT`    | /properties    | body: { idProperty, zone,
                          type, bussinesstype, 
                          value,image,idUserAdmin}  | Si                         | Update to property; for example: 52654-IdProperty 1155-zone, 2-type, 2-BussinessType, 350.000.000-valor, image, 101-IdUA | Ok

`DELETE` | /properties:id | url: id                   | Si                         | Delete to property; for example ID: 52654 | Ok.







