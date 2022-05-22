import React from 'react';

const Summary = () => {
    return (
        <div>
            <h2 className='text-3xl text-center my-12 font-bold'>OUR BUSINESS OVERVIEW </h2>
            <div className='text-center'>
                <div class="stats stats-vertical lg:stats-horizontal shadow  bg-accent text-primary-content">
                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div class="stat-title">Customers</div>
                        <div class="stat-value">31K</div>
                        <div class="stat-desc">Form 150 Different Countries</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div class="stat-title">New Customer This Year</div>
                        <div class="stat-value">4,200</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div class="stat-title">Upcoming Products</div>
                        <div class="stat-value">120</div>
                        <div class="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                    <div class="stat">
                        <div class="stat-title">Annual Profit</div>
                        <div class="stat-value">$89,400</div>
                        <div class="stat-actions">
                        </div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">Yearly Target</div>
                        <div class="stat-value">$100,400</div>
                        <div class="stat-actions">
                            <button class="btn btn-sm">Join Us</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Summary;