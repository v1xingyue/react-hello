

const PricePage = ({ price }) => {

    return (
        <div style={{ textAlign: 'center' }}>
            <p> Hello Current HNS Price</p>
            <p>{price.usd} $ </p>
            <p>{price.btc} BTC</p>
            <p>{price.eth} ETH</p>
        </div>
    )
}

export default PricePage;