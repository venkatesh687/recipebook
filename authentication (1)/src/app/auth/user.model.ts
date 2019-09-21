export class User{
  constructor(
    public email:string,
    public id:string,
    private token:string,
    private  _tokenExpirationDate:Date
  ){}
  getToken()
  {
    if(!this._tokenExpirationDate || new Date()>this._tokenExpirationDate)
    {
       return null;

    }
    return this.token;
  }
}
