import React from 'react';
import { Input, Icon, Button } from 'semantic-ui-react';

export default ({ changeCurrency }) => {
    return (
        <div className="width-100">
            <div className="filter-nav">
                <h2 className="inline-block bold">The Best Accommodations</h2>
                <div className="ui compact space">
                    <div className="ui fitted toggle checkbox">
                        <span className="dolar">$</span>
                        <input type="checkbox" className="space" 
                            onChange={changeCurrency}/>
                            <label></label>
                        <span className="quetzal">Q</span>
                    </div>
                </div>
            </div>
            <section className="filter-nav">
                <div className="search">
                    <Input icon placeholder='Search for destination in GUATEMALA'>
                        <input />
                        <Icon name='search' />
                    </Input>
                </div>
                <div className="filters">
                    <Button basic>Date</Button>
                    <Button basic>Guest</Button>
                    <Button basic>Price</Button>
                    <Button basic>More Filters</Button>
                </div>
            </section>
        </div>
    );
}