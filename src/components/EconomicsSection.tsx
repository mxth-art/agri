import React, { useState } from 'react';
import { TrendingUp, Droplet, DollarSign, Wind, Leaf } from 'lucide-react';
import AnimatedCounter from './animations/AnimatedCounter';

const EconomicsSection: React.FC = () => {
  const [roiValue, setRoiValue] = useState(50);
  
  // Calculate ROI metrics based on slider value
  const calculateROI = (value: number) => {
    // Base values
    const baseInvestment = 50; // $50M
    const baseIRR = 18;
    const basePayback = 7;
    const baseCarbon = 1;
    
    // Calculate adjusted values
    const investment = baseInvestment + (value / 100) * 50; // $50M to $100M
    const irr = baseIRR + (value / 100) * 4; // 18% to 22%
    const payback = basePayback - (value / 100) * 2; // 7 to 5 years
    const carbon = baseCarbon + (value / 100) * 1; // 1M to 2M tonnes
    
    return {
      investment: investment.toFixed(1),
      irr: irr.toFixed(1),
      payback: payback.toFixed(1),
      carbon: carbon.toFixed(1)
    };
  };
  
  const roi = calculateROI(roiValue);

  return (
    <section id="economics" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Economics & Environment</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our approach delivers exceptional returns on investment while creating significant environmental benefits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Economic Metrics */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-green-800 text-white px-6 py-4">
              <h3 className="text-xl font-semibold flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Economic Performance
              </h3>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 text-amber-600 mr-2" />
                    <h4 className="font-semibold text-gray-800">Internal Rate of Return</h4>
                  </div>
                  <div className="text-3xl font-bold text-green-700 mb-1">
                    <AnimatedCounter
                      from={0}
                      to={parseFloat(roi.irr)}
                      duration={1500}
                      decimals={1}
                    />%
                  </div>
                  <p className="text-sm text-gray-600">Industry-leading returns well above average renewable energy projects</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-800">Payback Period</h4>
                  </div>
                  <div className="text-3xl font-bold text-green-700 mb-1">
                    <AnimatedCounter
                      from={0}
                      to={parseFloat(roi.payback)}
                      duration={1500}
                      decimals={1}
                    /> years
                  </div>
                  <p className="text-sm text-gray-600">Rapid return on capital with long-term stable cash flows</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-gray-800">Total Investment</h4>
                  </div>
                  <div className="text-3xl font-bold text-green-700 mb-1">
                    $<AnimatedCounter
                      from={0}
                      to={parseFloat(roi.investment)}
                      duration={1500}
                      decimals={1}
                    />M
                  </div>
                  <p className="text-sm text-gray-600">Scalable investment opportunities from pilot to full commercial scale</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Environmental Metrics */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-green-800 text-white px-6 py-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Leaf className="h-5 w-5 mr-2" />
                Environmental Impact
              </h3>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Wind className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-gray-800">Carbon Reduction</h4>
                  </div>
                  <div className="text-3xl font-bold text-green-700 mb-1">
                    <AnimatedCounter
                      from={0}
                      to={parseFloat(roi.carbon)}
                      duration={1500}
                      decimals={1}
                    />M tonnes
                  </div>
                  <p className="text-sm text-gray-600">Annual CO₂ emissions avoided compared to fossil fuels</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Droplet className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-800">Water Usage Reduction</h4>
                  </div>
                  <div className="text-3xl font-bold text-green-700 mb-1">45%</div>
                  <p className="text-sm text-gray-600">Lower water usage compared to other biofuel technologies</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                  <h4 className="font-semibold text-gray-800 mb-2">Additional Environmental Benefits</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                      <span className="ml-2 text-gray-700">Reduction of field burning, improving local air quality</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                      <span className="ml-2 text-gray-700">Prevents methane emissions from decomposing agricultural waste</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                      <span className="ml-2 text-gray-700">Process byproducts used for soil enrichment and carbon sequestration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* ROI Simulator */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-green-800 text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Investment Simulator</h3>
            <p className="text-green-100 text-sm">Adjust the scale to see how investment size affects your returns</p>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <label htmlFor="scale-slider" className="block text-sm font-medium text-gray-700 mb-2">
                Facility Scale (Annual Capacity)
              </label>
              <input
                id="scale-slider"
                type="range"
                min="0"
                max="100"
                value={roiValue}
                onChange={(e) => setRoiValue(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>50,000 tonnes/year</span>
                <span>250,000 tonnes/year</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 text-sm mb-1">Investment</h4>
                <div className="text-xl font-bold text-green-700">${roi.investment}M</div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 text-sm mb-1">IRR</h4>
                <div className="text-xl font-bold text-green-700">{roi.irr}%</div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 text-sm mb-1">Payback Period</h4>
                <div className="text-xl font-bold text-green-700">{roi.payback} years</div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 text-sm mb-1">Carbon Reduction</h4>
                <div className="text-xl font-bold text-green-700">{roi.carbon}M tonnes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomicsSection;