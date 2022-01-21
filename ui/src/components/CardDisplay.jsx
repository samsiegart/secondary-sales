import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Container from '@material-ui/core/Container';
// import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '../assets/icons/search.png';
import FilterIcon from '../assets/icons/filter.png';
// import { makeStyles } from '@material-ui/core/styles';

import BaseballCard from './BaseballCard.jsx';
import Loader from './common/Loader.jsx';

// const useStyles = makeStyles((theme) => {
//   return {
//     root: {
//       marginTop: theme.spacing(2),
//     },
//     paper: {
//       padding: theme.spacing(3),
//       minWidth: '200px',
//     },
//     loading: {
//       marginBottom: theme.spacing(2),
//     },
//   };
// });

const CardDisplay = ({ activeTab, playerNames, handleClick }) => {
  const isReady = playerNames && playerNames.length > 0;

  const cards = playerNames.map((playerName) => (
    <div key={playerName}>
      <BaseballCard
        playerName={playerName}
        key={playerName}
        handleClick={handleClick}
      />
    </div>
  ));

  return (
    // <Container>
    //   <Grid container>
    //     <Grid container justify="space-evenly">
    //       <Paper elevation={0}>
    //         {!isReady && <CircularProgress size="2rem" />}
    //         <Typography>
    //           {isReady
    //             ? 'Click on a card below to make an offer to buy the card.'
    //             : 'Fetching card list...'}
    //         </Typography>
    //       </Paper>
    //     </Grid>
    //     <Grid
    //       container
    //       alignItems="stretch"
    //       direction="row"
    //       justify="space-evenly"
    //     >
    //       {cards}
    //     </Grid>
    //   </Grid>
    // </Container>
    <div className="display-card flex flex-col items-center max-w-7xl">
      <h1 className="text-3xl font-semibold mb-14">
        {activeTab === 0 && 'My Cards'}
        {activeTab === 1 && 'Marketplace'}
        {activeTab === 2 && 'Primary Sales'}
      </h1>
      {activeTab !== 0 && (
        <div className="flex gap-x-4 w-full mb-14">
          <div
            style={{ width: '76.92%' }}
            className="flex border justify-between border-alternativeLight rounded items-center"
          >
            <input
              className="outline-none focus:outline-none pl-4 rounded h-12 text-lg"
              placeholder="Search"
            />
            <img
              className=" h-4 mr-4 relative"
              src={SearchIcon}
              alt="search-icon"
            />
          </div>
          <select
            style={{
              width: '23.07%',
              backgroundImage: `url(${FilterIcon})`,
              backgroundSize: '25px',
              backgroundPositionY: 'center',
              backgroundPositionX: '95%',
            }}
            className="bg-no-repeat cursor-pointer text-primaryLight border border-alternativeLight bg-white rounded w-1/5 h-12 px-3.5 text-lg outline-none focus:outline-none font-normal"
          >
            <option></option>
          </select>
        </div>
      )}
      <div className="flex flex-col items-center">
        {!isReady && <Loader />}
        {!isReady && 'Fetching card list...'}
      </div>
      <div className="w-full justify-items-center grid grid-cols-3 gap-x-8 gap-y-10">
        {cards}
      </div>
    </div>
  );
};

export default CardDisplay;
