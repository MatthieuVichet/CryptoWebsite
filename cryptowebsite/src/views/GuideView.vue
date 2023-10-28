<template>
  <div class="guide-view">
    <CategoryBeginner
      categoryTitle="What are cryptocurrencies?"
      categoryDescription="A cryptocurrency is a digital currency, which is an alternative form of payment created using encryption algorithms. The use of encryption technologies means that cryptocurrencies function both as a currency and as a virtual accounting system."
      imageSrc="https://miro.medium.com/v2/resize:fit:563/0*CQ8-BE5n58FwihJj.jpg"
      videoUrl="https://www.youtube.com/embed/VP__lRQt0JA"
    />
    <CategoryBeginner
      categoryTitle="How to buy cryptocurrencies?"
      categoryDescription="Visit a crypto exchange website, Create an account, Follow the website's instructions to buy your cryptoassets, such as Bitcoin (BTC) and Ether (ETH), Your purchased cryptocurrency will appear in your exchange account, Well done!"
      imageSrc="https://public.bnbstatic.com/image/cms/blog/20201104/6b52e3dc-52f4-4837-998a-1530db10151d.png"
      videoUrl="https://www.youtube.com/embed/LfTYugR00tI"
    />
    <CategoryBeginner
      categoryTitle="What is a wallet?"
      categoryDescription="Cryptocurrency wallets are software applications on computers or mobile devices such as phones or tablets. They use an internet connection to access the blockchain network for the cryptocurrency you're using. Cryptocurrencies are not 'stored' anywhere—they are bits of data stored in a database."
      imageSrc="https://zipmex.com/static/d0d0b4d874d5503d225a4490b70351a6/1bbe7/yo.jpg"
      videoUrl="https://www.youtube.com/embed/d8IBpfs9bf4"
    />
    <CategoryBeginner
      categoryTitle="What are the different transactions?"
      categoryDescription="The five standard types of transaction scripts are pay-to-public-key-hash (P2PKH), public-key, multi-signature (limited to 15 keys), pay-to-script-hash (P2SH), and data output (OP_RETURN)."
      imageSrc="https://miro.medium.com/v2/resize:fit:1400/0*uBZswIiFz-1Z5WeI.jpg"
      videoUrl="https://www.youtube.com/embed/ZPFL6R-voW0"
    />
    <CategoryBeginner
      categoryTitle="How can I learn more in cryptocurrencies?"
      categoryDescription="Explore our website and stay curious about the cryptocurrency's world! The markets never stop to change and to bring new innovations, stay tuned everyday to understand how this ecosystem evolves."
      imageSrc="https://public.bnbstatic.com/image/cms/blog/20210723/8c705203-2890-4e57-a23a-2ea87083c773.png"
      videoUrl="https://www.youtube.com/embed/yubzJw0uiE4"
    />
  </div>
</template>

<script>
import CategoryBeginner from "@/components/CategoryBeginner.vue";

export default {
  components: {
    CategoryBeginner,
  },
};
</script>

<style scoped>
.guide-view {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>