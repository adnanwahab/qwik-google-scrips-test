import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Component from './react'
//import {QGreetings} from './react/'



export default component$(() => {
  return (
    <>
    <div id="calculator-root">
    <div>
        <div class="container-fluid">
            <div class="row" style="background: url(&quot;./hawaii.jpeg&quot;) center center / cover no-repeat fixed;">
             <div class="p-0 col-lg-6 col-md-6">
<div>
    <div class="calculator-form card">
        <div class="card-body">
            <div class="calculator-form__title card-title h5">Estimate Your Points!</div>
            <div class="calculator-form__subtitle card-subtitle h6">The amount you spend on your flight, the type of fare, your tier status, and the payment method you choose will all determine how many points you can earn in a calendar year.</div>
            <form class="calculator-form__form">
                <div class="pb-3">
                    <div class="form-group">
                        <label class="form-label form-label">Are you a Rapid Rewards Member?<span class="form-label__subtitle"> (Optional)</span></label>
                        <div id="rewardMember" role="group" class="select-btn-group btn-group btn-group-mb">
                            <button type="button" class="select-btn-group__btn--not-selected btn btn-primary">Yes</button>
                            <button type="button" class="select-btn-group__btn--not-selected btn btn-primary">No</button>
                        </div>
                    </div>
                </div>
                <div class="pb-3">
                    <div class="form-group">
                        <label class="form-label form-label">I want to earn points for...<span class="form-label__subtitle"> (Optional)</span></label>
                        <div id="earnPoints" role="group" class="select-btn-group btn-group btn-group-mb">
                            <button type="button" class="select-btn-group__btn--not-selected btn btn-primary">Reward flights</button>
                            <button type="button" class="select-btn-group__btn--not-selected btn btn-primary">Tier</button>
                            <button type="button" class="select-btn-group__btn--not-selected btn btn-primary">Companion Pass</button>
                        </div>
                    </div>
                </div>
                <div class="pb-3">
                    <div class="form-group">
                        <label class="form-label form-label">How much do you expect to spend per flight?<span class="tooltip-position"><img src="/info-circle-fill.svg" /></span></label>
                        <div class="slider-input">
                            <div class="left-inner-addon">
                                <span>$</span>
                                <input max="5000" placeholder="0" min="0" type="number" class="form-input form-control form-control-sm" value="0" />
                            </div>

                            <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
                            <input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />

                        </div>
                    </div>
                </div>
                <div class="pb-3">
                    <div class="form-group">
                        <label class="form-label form-label">Number of expected trips this year?<span class="tooltip-position"><img src="/info-circle-fill.svg" /></span></label>
                        <div class="slider-input">
                            <div>
                                <input max="500" placeholder="0" min="0" type="number" class="form-input form-control form-control-sm" value="0" />
                            </div>

                            <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
                            <input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                        </div>
                    </div>
                </div>
                <div class="pb-3">
                    <div class="form-group">
                        <label class="form-label form-label">Which fare will you normally fly?<span class="tooltip-position"><img src="/info-circle-fill.svg" /></span></label>
                        <div id="normalFareFly" role="group" class="select-btn-group btn-group btn-group-mb">
                            <button type="button" class="select-btn-group__btn--not-selected btn btn-primary">Business Select®</button>
                            <button type="button" class="select-btn-group__btn--not-selected btn btn-primary">Anytime</button>
                            <button type="button" class="select-btn-group__btn--not-selected btn btn-primary">Wanna Get Away Plus®</button>
                            <button type="button" class="select-btn-group__btn--not-selected btn btn-primary">Wanna Get Away®</button>
                        </div>
                    </div>
                </div>
                <div class="pb-3">
                    <div class="form-group">
                        <label class="form-label form-label">Your expected tier status at the start of the year<span class="tooltip-position"><img src="/info-circle-fill.svg" /></span><span class="form-label__subtitle"> (select one)</span></label>
                        <div id="expectedTierStatus" role="group" class="select-btn-group btn-group btn-group-mb">
                            <button type="button" class="select-btn-group__btn--not-selected btn btn-primary">No status</button>
                            <button type="button" class="select-btn-group__btn--not-selected btn btn-primary">A-List</button>
                            <button type="button" class="select-btn-group__btn--not-selected btn btn-primary">A-List Preferred</button>
                        </div>
                    </div>
                </div>
                <div class="pb-3">
                    <div style="padding-left: 0px; padding-right: 0px;">
                        <div class="form-group">
                            <div class="flex-column row">
                                <div class="d-flex justify-content-between col">
                                    <label class="form-label form-label" for="customSwitch">Do you have a Southwest Rapid Rewards credit card?<span class="form-label__subtitle"> (Optional)</span></label>
                                    <div id="customSwitch" class="custom-control custom-switch custom-switch-toggle d-flex">
                                        <input type="checkbox" class="custom-control-input" id="isSWRapidRewCC" />
                                        <label class="form-label custom-control-label" for="isSWRapidRewCC"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pb-3"></div>
                <div class="pb-3">
                    <div style="padding-left: 0px; padding-right: 0px;">
                        <div class="form-group">
                            <div class="flex-column row">
                                <div class="d-flex justify-content-between col">
                                    <label class="form-label form-label" for="customSwitch">Will you have points earned with Rapid Rewards partners?<span class="tooltip-position"><img src="/info-circle-fill.svg" /></span><span class="form-label__subtitle"> (Optional)</span></label>
                                    <div id="customSwitch" class="custom-control custom-switch custom-switch-toggle d-flex">
                                        <input type="checkbox" class="custom-control-input" id="isPointsEarnedRR" />
                                        <label class="form-label custom-control-label" for="isPointsEarnedRR"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
            </div>
        </div>
    </div>
</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
