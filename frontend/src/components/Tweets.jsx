import React, { useState, useEffect } from 'react'
import tweetsApi from '../api/tweetsApi'

const Tweets = () => {
  const [tweets, setTweets] = useState([])
  const [newTweet, setNewTweet] = useState('')

  useEffect(() => {
    fetchTweets()
  }, [])

  const fetchTweets = async () => {
    try {
      const tweets = await tweetsApi.getTweets()
      setTweets(tweets)
    } catch (error) {
      console.error(error)
    }
  }

  const addTweet = async () => {
    try {
      const tweet = await tweetsApi.createTweet(newTweet)
      setTweets([...tweets, tweet])
      setNewTweet('')
    } catch (error) {
      console.error(error)
    }
  }

  const updateTweettext = async (id, text) => {
    try {
      await tweetsApi.updateTweet(id, text)
      const updatedTweets = tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, text } : tweet
      )
      setTweets(updatedTweets)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteTweetById = async (id) => {
    try {
      await tweetsApi.deleteTweet(id)
      const updatedTweets = tweets.filter((tweet) => tweet.id !== id)
      setTweets(updatedTweets)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tweets</h1>
      <div className="mb-4">
        <input
          type="text"
          className="border rounded p-2 mr-2"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addTweet}
        >
          Add Tweet
        </button>
      </div>
      {tweets &&
        tweets.map((tweet) => (
          <div key={tweet.id} className="mb-4">
            <input
              type="text"
              className="border rounded p-2 mr-2"
              value={tweet.text}
              onChange={(e) => updateTweettext(tweet.id, e.target.value)}
            />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => deleteTweetById(tweet.id)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  )
}

export default Tweets
