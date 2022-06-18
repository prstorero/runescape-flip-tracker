# Runescape Flip Tracker

Runescape Flip Tracker is a webapp with the aim of aiding a runescape player to more easily track all of their current trades.

## Description

In the MMO Runescape, one way players make money is via a process referred to as flipping. The concept is simple: buy an item for a lower price and sell it for a higher price. The execution can get tricky, especially when you start having multiple trades flowing in and out. Different items have different amounts of time you wait before updating your offer, and this can quickly make managing everything in your head impossible. 

### The goal

The goal of this webapp is to aid in this process by allowing you to create as many timers as you need so you know when it's time to update an offer.

### Challenges
- Updating the persistent storage and state as the timer ticked down so the remaining time is not lost when you refresh the page


## Installation and running

This project utilizes create-react-app and its associated standard scripts. You can start this web app by running:

```
npm run serve
```

## Future planned features

- [x] Delete a timer
- [x] Support multiple timers
- [x] Persist time remaining after a page refresh
- [ ] Implement a better time mechanism (see limitations below)
- [ ] Move away from the localStorage API and use some kind of database instead
- [ ] Add a swap button - When a buy/sell offer fills, this button makes it easy to "swap" your buy/sell to the other type instead of deleting and re-creating the entry
- [ ] Add a restart button - Once you have to adjust your price, you need to restart your timer. Similar to the swap button, this removes the need to delete and re-create the entry
- [ ] Host this web app so anyone could use it
- [ ] Add a message to the home page when there are no flips

## Limitations
- While sitting on the add item page or having the page closed, the time is no longer tracked. I plan on overcoming this as part of a future feature update.
- Clearing the cache of the browser will lose the flips being tracked, which I plan to overcome by utilizing a database

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
You are free to use this however you please