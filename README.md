# Ibsenfrase

Passphrases consisting of several words chained together are popular. They are easier to remember and harder to crack. But generating them in your mind is not a good idea – humans have no random number generator, and will inevitably pick passphrases with a non-random sequence.

The most popular method of creating such passphrases is [Diceware](https://en.wikipedia.org/wiki/Diceware), a wordlist of 7776 (that is 6^5) English words, numbered with five digits between 1 and 6, making it easy to pick random words by throwing a die five times.

This generator uses a wordlist compiled from the original plays by Henrik Ibsen. The wordlist is comprised of more than 8500 words, which is more than the original Diceware wordlist. The words are not pruned for length, so there are many hard and long words in the list.

The idea is based on the [ibsenphrase Ruby gem](https://github.com/sigvei/ibsenphrase) by Sigve Indregard.

## License

This software is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

The Octave typeface is *not* licensed under the MIT license, but is (c) 2025 Faire Type.
