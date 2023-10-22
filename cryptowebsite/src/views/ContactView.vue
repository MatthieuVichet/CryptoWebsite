<template>
  <div class="contact">
    <h1>Meet the team!</h1>
    <div class="team">
      <ContactItem name="Matthieu Vichet" imgURL="logo.png" role="This is matthieu role" linkedinLink="https://www.linkedin.com/in/matthieu-vichet-4b31201a8/" email="matthieu.vichet@efrei.net"/>
      <ContactItem name="Marco-Naji Serhal" imgURL="logo.png" role="This is marco role" linkedinLink="https://www.linkedin.com/in/marco-naji-serhal/" email="marco-naji.serhal@efrei.net"/>
      <ContactItem name="Elsa Paya" imgURL="logo.png" role="This is elsa role" linkedinLink="https://www.linkedin.com/in/elsa-paya/" email="elsa.paya@efrei.net"/>
    </div>
    <div>
      <h2>This project is developed in partnership with EFREI Paris</h2>
      <h2>M1 IT For Finance - Web Development For IT engineer - 2023/2024</h2>
      <img src="@/assets/efreilogo.png" />
    </div>
    <div>
      <h2>You can find us here :</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.6728364745345!2d2.364801747147016!3d48.788135886362824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673e24e04a9c3%3A0xc55cb3e676f95321!2sEfrei!5e0!3m2!1sfr!2sfr!4v1697982555910!5m2!1sfr!2sfr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    
  </div>
</template>

<script>
import ContactItem from '@/components/ContactItem.vue';

export default {
  components: {
    ContactItem,
  },
}
</script>
<style>
.contact{
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
.team{
  display: flex;
  justify-content: space-evenly;
  background-color: rgba(18,153,247,0.2); /* Change this to the desired color */
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin: 2rem;
  border-radius: 3rem;

}
</style>
