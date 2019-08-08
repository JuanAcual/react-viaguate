import React, { Component, Fragment } from 'react';
import Card from './Card';
import FilterCards from './FilterCards';
// import './style.css';

export default class CardFeature extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
            currency: "$",
        };
        this.changeCurrency = this.changeCurrency.bind(this);
    }
    
    changeCurrency = () => {
        const { currency } = this.state;

        if ( currency === "$" ) {
            this.setState({
                currency: "Q"
            });
        } else {
            this.setState({
                currency: "$"
            });
        }
        
    }

    componentWillMount() {
        fetch('https://viaguate-10-backend-cliente.mybluemix.net/api/accommodation/ViewVacationrentals')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            this.setState({ data: data })
        })
    }

    render() {
        const { data, currency } = this.state;
        const { changeCurrency } = this;

        if (data.length > 0) {
            return (
                <Fragment>
                    <section className="cards-container">
                        <FilterCards changeCurrency={changeCurrency}/>
                    </section>
                    <section className="cards-container">
                        {data.map(i => (
                            <Card
                                key={i._id} 
                                data={i}
                                offer={Math.random() >= 0.5}
                                heart={Math.random() >= 0.5}
                                currency={currency}
                            />
                        ))}
                    </section>
                </Fragment>
            );
        } else {
            return <p>Cargando Cards</p>
        }
    };
}