// The code in this file requires an understanding of Autodux.
// See: https://github.com/ericelliott/autodux
import autodux from 'autodux';

export const {
  reducer,
  initial: defaultState,
  actions: {
    setApproved,
    setConnected,
    setCardPurse,
    setTokenPurses,
    setAvailableCards,
    setError,
    setBoughtCard,
    setActiveCard,
    setActiveCardBid,
    setTokenDisplayInfo,
    setTokenPetname,
    setOpenExpandModal,
    setActiveTab,
    setType,
    setUserOffers,
    setOpenEnableAppDialog,
    setUserNfts,
    setUserCards,
    setNeedToApproveOffer,
  },
} = autodux({
  slice: 'cardStore',
  initial: {
    approved: true,
    connected: false,
    cardPurse: [],
    tokenPurses: [],
    availableCards: [],
    error: {},
    boughtCard: false,
    activeCard: null,
    activeCardBid: null,
    tokenDisplayInfo: null,
    tokenPetname: null,
    openExpandModal: null,
    activeTab: 0,
    type: 'Sell Product',
    userOffers: [],
    openEnableAppDialog: false,
    userNfts: [],
    userCards: [],
    needToApproveOffer: false,
  },
  actions: {},
});