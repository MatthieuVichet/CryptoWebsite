<template>
  <div>
    <h1>Resources</h1>
    <div class="resources-view">
      <FlexboxCard
        v-for="resource in resources"
        :key="resource.id"
        :title="resource.title"
        :text="resource.description"
        :imageSrc="resource.imageSrc"
        :url="resource.url"
      />
    </div>
  </div>
</template>

<script>
import FlexboxCard from '@/components/FlexboxCard.vue';

export default {
  components: {
    FlexboxCard,
  },
  data() {
    return {
      resources: [
        {
          id: 1,
          title: 'TradingView',
          description: 'Salut à toi, Trader ! Nous sommes TradingView, une plateforme graphique et un réseau social utilisés par + de 50M de traders et investisseurs dans le monde entier pour repérer les opportunités sur les marchés mondiaux.',
          imageSrc: 'https://static.tradingview.com/static/images/logo-preview.png',
          url: 'https://fr.tradingview.com/',
        },
        {
          id: 2,
          title: 'eToro',
          description: 'eToro, en tant que leader dans le domaine de l’investissement social, a pour objectif de révolutionner la manière dont les gens investissent tout en les aidant à développer leur savoir-faire financier.',
          imageSrc: 'https://mma.prnewswire.com/media/520426/eToro_Logo.jpg?p=facebook',
          url: 'https://www.etoro.com/fr/', 
        },
        {
          id: 3,
          title: 'Binance',
          description: 'Chez Binance, nous croyons que tout le monde devrait avoir la liberté de gagner, de détenir, de dépenser, de partager et de donner son argent, peu importe qui vous êtes ou d’où vous venez.',
          imageSrc: 'https://www.investopedia.com/thmb/F5w0M48xTFtv-VQE9GFpYDMA2-k=/fit-in/1500x750/filters:format(png):fill(white):max_bytes(150000):strip_icc()/Binance-0e4c4bfb014e4d9ca8f0b6e11c9db562.jpg',
          url: 'https://www.binance.com/fr',
        },
        {
          id: 4,
          title: 'XTB',
          description: "Nous sommes l'un des plus grands courtiers FX et CFD cotés en bourse au monde, offrant aux investisseurs un accès instantané à des centaines de marchés mondiaux.",
          imageSrc: 'https://xas.scdn5.secure.raxcdn.com/build/twigImages/og-image.cfa12384.png',
          url: 'https://www.xtb.com/fr', 
        },
        {
          id: 5,
          title: 'AvaTrade',
          description: 'Le site de trading régulé AvaTrade fait figure de précurseur innovant dans le trading en ligne depuis 2006.',
          imageSrc: 'https://mma.prnewswire.com/media/1083911/AvaTrade_Logo.jpg?p=facebook',
          url: 'https://www.avatrade.fr/trading-platforms', 
        },
        {
          id: 6,
          title: 'Degiro',
          description: 'Nous sommes un des courtiers principaux en Europe. Grâce à notre plateforme intelligente et conviviale, tout le monde peut devenir un investisseur.',
          imageSrc: 'https://cdn.francetransactions.com/IMG/arton94072.jpg?1636360419',
          url: 'https://www.degiro.fr/trader', 
        },
        {
          id: 7,
          title: 'Cryptocurrency Regulations Around the World',
          description: 'The growth of cryptocurrency from speculative investment to a new asset class has prompted governments around the world to explore ways to regulate it. Below, ...',
          imageSrc: 'https://images.prismic.io/ddhomepage/3b204dd7-a82a-46ca-93a9-f4655c1f2cc9_Logo_Investopedia.png?auto=compress,format&rect=0,119,500,261&w=1200&h=627',
          url: 'https://www.investopedia.com/cryptocurrency-regulations-around-the-world-5202122',
        },
        {
          id: 8,
          title: 'Crypto Needs Comprehensive Policies to Protect Economies and Investors',
          description: 'Establishing effective policies has become a priority for authorities amid the failure of some exchanges and collapse of certain crypto assets',
          imageSrc: 'https://www.imf.org/-/media/Images/IMF/Blog/Articles/Default/imf-blog-standard-graphic-fr.ashx',
          url: 'https://www.imf.org/en/Blogs/Articles/2023/07/18/crypto-needs-comprehensive-policies-to-protect-economies-and-investors', 
        },
        {
          id: 9,
          title: 'REGULATING CRYPTO',
          description: 'Crypto assets have been around for more than a decade, but it’s only now that efforts to regulate them have moved to the top of the policy agenda. This...',
          imageSrc: 'https://minfin.am/website/images/category/IMF_0.jpg',
          url: 'https://www.imf.org/en/Publications/fandd/issues/2022/09/Regulating-crypto-Narain-Moretti', 
        },
        {
          id: 10,
          title: 'Crypto Trading',
          description: 'Following the huge success of our previous two ebooks, Forex Trading for Beginners and Stock Trading for Beginners, we’re back with a brand new one ...',
          imageSrc: 'data:image/jpeg;base64,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',
          url: 'https://financeillustrated.com/crypto-trading-pdf',
        },
        {
          id: 11,
          title: 'Profiting From cryptocurrencies',
          description: 'How to profit from Bitcoin and cryptocurrencies in just 20 mins a day',
          imageSrc: 'https://cdn.slidesharecdn.com/ss_thumbnails/abeginnersguidetoprofitingfromcryptocurrencies-pdfroomedit1-211023121251-thumbnail.jpg?width=640&height=640&fit=bounds',
          url: 'https://www.investment-mastery.com/wp-content/uploads/2020/09/Crypto-Currency-Book-Marcus-de-Maria.pdf', // URL de redirection 2
        },
        {
          id: 12,
          title: 'The Basics of Bitcoins and Blockchains',
          description: 'Bitcoin, Ethereum, and other cryptocurrencies. Gain an understanding of a broad spectrum of Bitcoin topics including the history of Bitcoin, the Bitcoin blockchain, and Bitcoin buying, selling, and ...',
          imageSrc: 'https://m.media-amazon.com/images/I/819bH1CNx5L._AC_UF1000,1000_QL80_.jpg',
          url: 'https://www.pdfdrive.com/the-basics-of-bitcoins-and-blockchains-an-introduction-to-cryptocurrencies-and-the-technology-that-powers-them-e199822799.html', // URL de redirection 2
        },
        {
          id: 13,
          title: 'SocialTrader Tools',
          description: 'ocial Trader Tools is a web based platform for anyone that uses MT4 and MT5. Hosted in the cloud 24/7 without the hassle of a VPS, allowing you to copy trades to any amount of trading accounts and much more.',
          imageSrc: 'data:image/jpeg;base64,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',
          url: 'https://www.socialtradertools.com/', 
        },
        {
          id: 14,
          title: 'Prime XBT',
          description: 'Social Trader Tools is a special platform that can be used to copy deals of other traders. This solution is great for beginning traders because they can make profits by following ...',
          imageSrc: 'https://www.algerie360.com/wp-content/uploads/2023/10/PrimeXBT-Image.png',
          url: 'https://primexbt-copy-trading.com/social-trader-tools-review/', 
        },
        {
          id: 15,
          title: 'FxPro',
          description: 'Depuis sa création, FxPro s’est développée avec succès pour servir des clients particuliers et institutionnels dans plus de 170 pays - et nous continuons à nous développer.',
          imageSrc: 'https://africa-platform.org/wp-content/uploads/fxpro_head-730x351.jpg',
          url: 'https://www.fxpro.fr/trading-tools',
        },
        
      ],
    };
  },
};
</script>



<style scoped>
.resources-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
