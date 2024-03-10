import React, { useState, useEffect } from 'react';

const CountDown = (props) => {
    const calculateTimeLeft = () => {
        const difference = new Date(props.event.end_date) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <div key={interval}>
                <div className="mx-2">
                    <div className="flex justify-center items-center w-[55px] h-[55px] bg-gradient-to-bl from-black/100 to-black/40 rounded-xl">
                        <p className="text-[36px] font-bold text-white">
                            {timeLeft[interval]}
                        </p>
                    </div>
                    <p className="my-1 text-xs font-bold text-center text-white">
                        {interval.toUpperCase()}
                    </p>
                </div>
            </div>
        );
    });

    return (
        <div className="sticky top-0">
            <div className="mt-10">
                <div className="flex justify-center items-center h-full">
                    <div className={`relative w-[307px] h-[136px] ${props.event.color_event} rounded-xl`}>
                        <div className="flex justify-center items-center pt-6">
                            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                        </div>
                        <p className="text-xs font-bold text-center text-[#969696]">
                            <strong>{props.event.title}</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountDown;
