import { Trans } from '@lingui/macro'
import { useContext } from 'react'
import { AlertCircle } from 'react-feather'
import styled, { ThemeContext } from 'styled-components/macro'

import { CHAIN_INFO, SupportedChainId } from '../../constants/chains'
import { ThemedText } from '../../theme'
import { AutoColumn } from '../Column'
import { AutoRow } from '../Row'

const RowNoFlex = styled(AutoRow)`
  flex-wrap: nowrap;
`

export default function FailedNetworkSwitchPopup({ chainId }: { chainId: SupportedChainId }) {
  const chainInfo = CHAIN_INFO[chainId]
  const theme = useContext(ThemeContext)

  return (
    <RowNoFlex>
      <div style={{ paddingRight: 16 }}>
        <AlertCircle color={theme.red1} size={24} />
      </div>
      <AutoColumn gap="8px">
        <ThemedText.Body fontWeight={500}>
          <Trans>
            Failed to switch networks from the Moonswap Interface. In order to use Moonswap on {chainInfo.label}, you
            must change the network in your wallet.
          </Trans>
        </ThemedText.Body>
      </AutoColumn>
    </RowNoFlex>
  )
}
