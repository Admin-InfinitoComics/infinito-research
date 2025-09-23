import React, { useEffect, useState } from 'react';
import BrowsePapers from './BrowsePapers';
import InfinitoCarousel from './InfinitoResearch';
import { researchBrowse } from '../../services/browseService';

const Paper = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Central loading state

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await researchBrowse();
      setData(res?.data?.papers || []); // Extract papers array safely
    } catch (error) {
      console.error('Error fetching data:', error);
      setData([]);
    } finally {
      setTimeout(() => setIsLoading(false), 1000); // Optional shimmer delay
    }
  };

  fetchData();
}, []);

  return (
    <div>
      <InfinitoCarousel researchPaper={data} isLoading={isLoading} />
      <BrowsePapers allPapers={data} isLoading={isLoading} />
    </div>
  );
};

export default Paper;
