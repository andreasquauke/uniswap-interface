# Moonswap Interface

[![Unit Tests](https://github.com/Moonswap/uniswap-interface/actions/workflows/unit-tests.yaml/badge.svg)](https://github.com/Moonswap/uniswap-interface/actions/workflows/unit-tests.yaml)
[![Integration Tests](https://github.com/Moonswap/uniswap-interface/actions/workflows/integration-tests.yaml/badge.svg)](https://github.com/Moonswap/uniswap-interface/actions/workflows/integration-tests.yaml)
[![Lint](https://github.com/Moonswap/uniswap-interface/actions/workflows/lint.yml/badge.svg)](https://github.com/Moonswap/uniswap-interface/actions/workflows/lint.yml)
[![Release](https://github.com/Moonswap/uniswap-interface/actions/workflows/release.yaml/badge.svg)](https://github.com/Moonswap/uniswap-interface/actions/workflows/release.yaml)
[![Crowdin](https://badges.crowdin.net/uniswap-interface/localized.svg)](https://crowdin.com/project/uniswap-interface)

An open source interface for Moonswap -- a protocol for decentralized exchange of Ethereum tokens.

- Website: [uniswap.org](https://uniswap.org/)
- Interface: [app.uniswap.org](https://app.uniswap.org)
- Docs: [uniswap.org/docs/](https://docs.uniswap.org/)
- Twitter: [@Moonswap](https://twitter.com/Moonswap)
- Reddit: [/r/Moonswap](https://www.reddit.com/r/Moonswap/)
- Email: [contact@uniswap.org](mailto:contact@uniswap.org)
- Discord: [Moonswap](https://discord.gg/FCfyBSbCU5)
- Whitepapers:
  - [V1](https://hackmd.io/C-DvwDSfSxuh-Gd4WKE_ig)
  - [V2](https://uniswap.org/whitepaper.pdf)
  - [V3](https://uniswap.org/whitepaper-v3.pdf)

## Accessing the Moonswap Interface

To access the Moonswap Interface, use an IPFS gateway link from the
[latest release](https://github.com/Moonswap/uniswap-interface/releases/latest),
or visit [app.uniswap.org](https://app.uniswap.org).

## Unsupported tokens

Check out `useUnsupportedTokenList()` in [src/state/lists/hooks.ts](./src/state/lists/hooks.ts) for blocking tokens in your instance of the interface.

You can block an entire list of tokens by passing in a tokenlist like [here](./src/constants/lists.ts) or you can block specific tokens by adding them to [unsupported.tokenlist.json](./src/constants/tokenLists/unsupported.tokenlist.json).

## Contributions

For steps on local deployment, development, and code contribution, please see [CONTRIBUTING](./CONTRIBUTING.md).

## Accessing Moonswap V2

The Moonswap Interface supports swapping, adding liquidity, removing liquidity and migrating liquidity for Moonswap protocol V2.

- Swap on Moonswap V2: https://app.uniswap.org/#/swap?use=v2
- View V2 liquidity: https://app.uniswap.org/#/pool/v2
- Add V2 liquidity: https://app.uniswap.org/#/add/v2
- Migrate V2 liquidity to V3: https://app.uniswap.org/#/migrate/v2

## Accessing Moonswap V1

The Moonswap V1 interface for mainnet and testnets is accessible via IPFS gateways
linked from the [v1.0.0 release](https://github.com/Moonswap/uniswap-interface/releases/tag/v1.0.0).
