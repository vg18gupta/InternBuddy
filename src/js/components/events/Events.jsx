import React from 'react';
import dataForEvents from './DataEvents';
import EventsSection from './EventsSection';
import Discover from '../discover/Discover';
import News from '../News/News';
import Hero from '../hero/HeroImage';

const Events = () => {
  // console.log(dataForEvents)
  const dataToRender = dataForEvents.map(item => (
    <EventsSection
      key={item.id}
      thmubnail={item.thmubnail}
      style={item.style}
      description={item.description}
      amountOfPhotos={item.amountOfPhotos}
      year={item.year}
    />
  ));
  return (
    <div>
      <Hero style={'events-img'} />
      <div className="events-wrapper">
        <div className="my-events">
          <h2 className="events-h2">Data Science</h2>
          <div className="box-events" />
          <p>
          Data science is an inter-disciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data.[1][2] Data science is related to data mining and big data.

Data science is a "concept to unify statistics, data analysis, machine learning and their related methods" in order to "understand and analyze actual phenomena" with data.[3] It employs techniques and theories drawn from many fields within the context of mathematics, statistics, computer science, and information science. Turing award winner Jim Gray imagined data science as a "fourth paradigm" of science (empirical, theoretical, computational and now data-driven) and asserted that "everything about science is changing because of the impact of information of technology" and the data deluge.
          </p>
          {dataToRender}
        </div>
        <div className="events-news">
          <News />
        </div>
      </div>
      <div className="clear">
        <Discover />
      </div>
    </div>
  );
};

export default Events;
