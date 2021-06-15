import React from 'react';
import Toggle from './ToggleButton';

export default function Serve() {

    const servings = [25,50,100,200];

    return (
        <div className="serve">
            <div className="allServings">
                { 
                    servings.map((serving, i)=>(
                        <input key={i} type="button" className="servingButton" value={`${serving} Serving`} />
                    ))
                }
            </div>
            <div className="subscription">
                <div className="annual">
                    <h4>Annual</h4>
                    <span>50% off</span>
                </div>
                <Toggle />
                <div className="monthly">
                    <h4>Monthly</h4>
                </div>
            </div>

            <div className="finalCalculation">
                <div className="calc">
                    <h3>lollipop</h3>
                    <div><b>$100</b><span>per month</span></div>
                    <div>For 100 Serving</div>
                </div>
                <div className="calc">
                    <h3>Icecandy</h3>
                    <div><b>$200</b><span>per month</span></div>
                    <div>For 100 Serving</div>
                </div>
                <div className="calc activeCalc">
                    <h3>Your savings with lollipop</h3>
                    <div className="primaryColor"><b>$100</b></div>
                    <span>per month</span>
                </div>
            </div>
        </div>
    )
}
