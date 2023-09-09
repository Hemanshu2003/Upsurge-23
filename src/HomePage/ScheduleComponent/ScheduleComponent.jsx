import { useState } from 'react';
import './ScheduleComponent.css'; // Import your stylesheet
import example1 from './images/hackathon1.jpg';
import ex2 from './images/images.jpg';
import ex3 from './images/blockchain.jpg';

const emojis = [
  [example1, 'Smackathon', 'U+1F433'],
  [ex2, 'Flashmob', 'U+1F40B'],
  [ex3, 'Blockchain Hands', 'U+1F42C'],
  [example1, 'Smackathon', 'U+1F433'],
  [ex2, 'Flashmob', 'U+1F40B'],
  [ex3, 'blockchain workshop ', 'U+1F42C'],
  [example1, 'Smackathon', 'U+1F433'],
  [ex2, 'FlashMob', 'U+1F40B'],
  [ex3, 'Blockchain Hands', 'U+1F42C'],
];
const emojis1 = [
  [example1, 'Smackathon', 'U+1F433'],
  [ex2, 'Flashmob', 'U+1F40B'],
  [ex3, 'Blockchain Hands', 'U+1F42C'],
  [example1, 'Smackathon', 'U+1F433'],
  [ex2, 'Flashmob', 'U+1F40B'],
  [ex3, 'blockchain workshop ', 'U+1F42C'],
  [example1, 'Smackathon', 'U+1F433'],
  [ex2, 'FlashMob', 'U+1F40B'],
  [ex3, 'Blockchain Hands', 'U+1F42C'],
];
const emojis2 = [
  [example1, 'Smackathon', 'U+1F433'],
  [ex2, 'Flashmob', 'U+1F40B'],
  [ex3, 'Blockchain Hands', 'U+1F42C'],
  [example1, 'Smackathon', 'U+1F433'],
  [ex2, 'Flashmob', 'U+1F40B'],
  [ex3, 'blockchain workshop ', 'U+1F42C'],
  [example1, 'Smackathon', 'U+1F433'],
  [ex2, 'FlashMob', 'U+1F40B'],
  [ex3, 'Blockchain Hands', 'U+1F42C'],
];

const ScheduleComponent = () => {
  var [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState(emojis);
  var [heading, setheading] = useState('Day 1');
  const goToPrevious = () => {
    // const isFirstSlide = currentIndex === 0;
    currentIndex = (currentIndex - 1 + 3) % 3;
    // const isFirstSlide = currentIndex === 0;
    if (currentIndex === 0) {
      setItems(emojis);
      setheading('Day 1');
    } else if (currentIndex === 1) {
      setItems(emojis1);
      setheading('Day 2');
    } else if (currentIndex === 2) {
      setItems(emojis2);
      setheading('Day 3');
    }
    const newIndex = currentIndex;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    currentIndex = (currentIndex + 1) % 3;
    if (currentIndex === 0) {
      setItems(emojis);
      setheading('Day 1');
    } else if (currentIndex === 1) {
      setItems(emojis1);
      setheading('Day 2');
    } else if (currentIndex === 2) {
      setItems(emojis2);
      setheading('Day 3');
    }
    const newIndex = currentIndex;
    setCurrentIndex(newIndex);
  };
  return (
    <div>
      <h1 className="schedule_heading" style={{ textAlign: 'centre' }}>
        Schedule
      </h1>
      <div>
        <h1 className="Banner_heading" style={{ textAlign: 'centre' }}>
          {heading}
        </h1>
      </div>
      <div className="wrapper">
        <div className="carousel">
          <div className="carousel_items">
            {items.map((i, index) => (
              <div key={index} className="carousel__item">
                <div className="carousel__item-head">
                  <img
                    src={i[0]}
                    style={{
                      borderRadius: '100%',
                      height: '80px',
                      width: '80px',
                    }}
                  />
                </div>
                <div className="carousel__item-body">
                  <p className="title">{i[1]}</p>
                  <p>Unicode: {i[2]}</p>
                </div>
              </div>
            ))}
          </div>
          <div onClick={goToPrevious} className="leftArrowStyles">
            ❰❰
          </div>
          <div onClick={goToNext} className="rightArrowStyles">
            ❱❱
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleComponent;
