import React, {Component} from 'react';
import "./Container.scss";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const textboxIcon = process.env.PUBLIC_URL +"./icons/Page 1.png";

export default class Container extends Component{

	constructor(props){
		super(props);
		this.state={
			checkFlag: false,
			businessName: "",
			businessSite: "",
			email: "",
			psw: "",
			ticketing:"",
			options: [{ value: 'zendesk', label: 'Zendesk' },
  					{ value: 'intercom', label: 'Intercom' },
  					{ value: 'gorgias', label: 'Gorgias' }]
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick = (e) =>{
		const name= e.target.name;
		const val = e.target.value;
		if(val === "")
			this.setState({checkFlag: true})
		else{
			this.setState({[name]:val})
		}
	}

	render(){
		return(
			<div className="container">
				<img src={textboxIcon} id="textboxIcon"/>
				<div id="text">
					Tell us about yourself
				</div>
				 <form>
				    <div>
				    	<input type="text" placeholder="What is the name of your business?" d required name="businessName" onChange={this.handleClick} onFocus={this.handleClick}/>
				      	<label className={this.state.businessName ==="" && this.state.checkFlag? "" : "hidden"}> Business name is required</label>

				      	<input type="text" placeholder="Business website"  required onChange={this.handleClick}  name="businessSite" onFocus={this.handleClick}/>
				      	<label className={this.state.businessSite ==="" && this.state.checkFlag? "" : "hidden"}> Business website is required</label>

				  
				      		
					  {/*
					  <select defaultValue={this.state.ticketing} required onChange={this.handleClick}  onFocus={this.handleClick}>
				      	  <option value="">Select your ticketing system</option>
						  <option value="zendesk">Zendesk</option>
						  <option value="intercom">Intercom</option>
						  <option value="gorgias">Gorgias</option>
					  	</select> 
					 */}

					  	{/*<input list="datalist" defaultValue={this.state.ticketing} required onChange={this.handleClick}  onFocus={this.handleClick} placeholder="Select your ticketing system" />
					  	<datalist id="datalist">
						  <option value="Zendesk"></option>
						  <option value="Intercom"></option>
						  <option value="Gorgias"></option>
					  	</datalist>*/}
						<Dropdown options={this.state.options} onChange={(val)=> {this.setState({ticketing: val.value})}} value={this.state.ticketing} placeholder="Select an option" name="options" className="datalist"/>
					  
					  
				      	<label className={this.state.ticketing ==="" && this.state.checkFlag? "" : "hidden"}> Ticketing system required</label>

				      	<input type="text" placeholder="Your email"  name="email" required onChange={this.handleClick} onFocus={this.handleClick} />
				      	<label className={this.state.email ==="" && this.state.checkFlag? "" : "hidden"}> Email is required</label>

				      	<input type="password" placeholder="Password"  name="psw" required onChange={this.handleClick} onFocus={this.handleClick}/>
				      	<label className={this.state.psw ==="" && this.state.checkFlag? "" : "hidden"}> Password is required</label>

				      	<span id="terms"><input type="checkbox"  name="terms"/>I accept to the <a href="#">Terms of Service </a></span>
				    </div>
				  </form>
			</div>
		)
	}
}