import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String},
      active: {Type: Boolean, reflect: true},
      month: {type: String},
      day: {type: Number},
      header: {type: String},
      infotext: {type: String},
      image: {type: String},
      headlinklink: {type: String},
      headline: {type: String}
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        background-color: white;
      }

      .holder{
        display: inline-block;
        align-items: top;
        background-color: #fff;
        max-width: 400px;
        width: 400px;
        height: 400px;
        text-align: left;
        padding-left: 8px;
      }

      
      .header{
        font-size: 35px; 
        color: #001E44;
        margin: 1px;
        font-family: 'Roboto',sans-serif;
        font-weight: 700;
        font-size: 30px;
        position: relative;
      }

      .outsidebutton{
        position: absolute;
        top: 1000px;
        left: 2000px;
        background-color: white;
        outline-color: lightblue;
        text-transform: uppercase;
        font-style: italic;
        font-weight: 700;
        letter-spacing: 0.025rem;
        color: #CCF0FF !important;
        display: inline-block;
        margin-top: 20px;
        text-decoration: none;
        border: 2px solid #005fa9;
        background-color: #fff;
        color: #005fa9 !important;
        padding: 12px 16px 12px 24px;
      }
      .outsidebutton:hover {
        background-color: #005fa9;
        border: 2px solid black;
        border-radius: 2px;
        color: white !important;
        cursor: pointer;
      }
     
      .seg{
        top: 5px;
        position: relative;
        left: 5px;
        margin-left: 10px;
        right: 500px;
        margin-right: 600px;
      }


      .header{
        font-size: 35px; 
        color: #001E44;
        margin: 1px;
        font-family: 'Roboto',sans-serif;
        font-weight: 700;
        font-size: 2.2em;
      }

      image{
        height: 150px;
        width: 350px;
        
      }

      .seg .datebox {
        position: relative;
        box-sizing: border-box;
        width: 0.6;
        height: 10px;
        width: 50px;
        text-align: center;
        margin-right: 10px;
        float: left;
        position: relative;
        left: 5px;
        top: 1px;
        
      }

      .datebox .month{
        display: block;
        background: #1E407C;
        border-radius: 0 0 2px 2px;
        color: #FFF;
        font-size: 0.8em;
        font-weight: bold;
        line-height: 1.8;
        padding: 1px 10px;
        text-transform: uppercase;
      }

      .datebox .day{
        background: #f7f7f7;
        border-radius: 0 0 2px 2px;
        color: #444;
        display: block;
        font-size: 18px;
        font-weight: 900;
        padding: 10px 20px;
      }
      
      .headline{
        position: relative;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
        margin-top: 33px;
        margin-bottom: 33px;
        text-transform: uppercase;
        left: 65px;
        top: 1px;
        width: 250px;
        color: #005fa9;
        text-decoration: none;
      }
      .headlinetext{
        position: relative;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
        margin-top: 33px;
        margin-bottom: 33px;
        text-transform: uppercase;
        left: 65px;
        top: 1px;
        width: 250px;
        color: #005fa9;
        text-decoration: none;
      }
    
      
      .infotext{
        position: relative;
        font-size: 20px;
        color: black;
        width: 157px;
        height: 47px;
        padding-left: 50px;
        font-family: sans-serif;
        size: 100px;
        width: 250px; 
        height: 114px;
        left: 300px;
        top: 225px;   
        
      }
    `;
  }

  constructor() {
    super();
    this.title = '';
    this.body = '';
    this.link = '';
    this.text = '';
    this.month = '';
    this.day = '';
    this.headline = '';
    this.headlinklink = '';
    this.infotext = '';
    this.buttonlink = 'https://hr.psu.edu/news';
  }

  render() {
    return html `
      <div class="seg">
        <div class="images">
          <a href=${this.link}>
          <img src=${this.image} ></a> 
        </div>
          <div class="datebox">
              <span class="month">${this.month}</span>
              <span class="day">${this.day}</span>
          </div>
          <div class="headline">
          <label class="headlinetext"> <a href=${this.headlinelink}><slot>${this.headline}</slot></a></label>
          </div>
          <div property="schema:text" class="info"><slot>${this.infotext}</slot></div>
          
        </div>
      </div>
      <a class="outsidebutton" href=${this.buttonlink}>
          <button class="butone" active>View All News > </button>
          </a>
    `;
  }
}
