

Event bağlamanın 4 yolu var:

1.si constructorda methodu bind edip, render içinde aşağıdaki şekilde kullanmak;
constructor(props) {
    super(props);
    ...
    this.handleClick = this.handleClick.bind(this);
  }
<button onClick={this.handleClick}>

2.si render içinde kullanıldığı yerde bind etmek;
 <button onClick={this.handleClick.bind(this)}>

3.sü * render içinde arrow functions olarak bind etmek
<button onClick={() => { this.handleClick(); }}>

4.sü ise methodu arrow function olarak tanımlamak (bind kullanmak yerine)
  
  handleClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };
<button onClick={this.handleClick}>