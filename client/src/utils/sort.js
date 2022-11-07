const isThread = (obj) => {
    if (obj.tweets)
        return true;
    return false;
}

const comp = (x, y) => {
    const date_x = isThread(x) ? (x.tweets[0].time) : (x.time);
    const date_y = isThread(y) ? (y.tweets[0].time) : (y.time);
    return (date_x > date_y) ? -1 : 1;

}

export const sortTweetsAndThreads = (tweets, threads) => {

    const tweetsAndThreads = tweets.concat(threads);
    tweetsAndThreads.sort(comp);
    return tweetsAndThreads;
}