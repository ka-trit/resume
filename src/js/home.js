import TheSlideShow from "../components/TheSlideShow.vue";

export default {
  components: {
    TheSlideShow,
  },
  data() {
    return {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima impedit deleniti itaque dolor aperiam, velit dolore voluptas quam architecto voluptatem suscipit error exercitationem, quaerat incidunt ipsam aliquam, deserunt quod ipsum.',
      imgs: '../src/assets/image/Rectangle9.png',
      img: '../src/assets/image/Rectangle11.png',
      aboutData: [
        {
          title: 'Geography',
          desc: '<p>1. Location: Southeast Asia, bordered by Thailand, Laos, Vietnam, and the Gulf of Thailand.</p><p>2. Capital: Phnom Penh.</p><p>3. Major Rivers: Mekong River, Tonle Sap River.</p>'
        },
        {
          title: 'Nature',
          desc: '<p>1. Biodiversity: Rich in wildlife, including elephants, tigers, and various bird species.</p><p>2. Natural Landscapes: Features forests, mountains, and the Mekong River delta.</p>'
        },
        {
          title: 'History',
          desc: '<p>1. Ancient Empire: Home to the Khmer Empire (9th to 15th century), known for Angkor Wat.</p><p>2. Colonial Period: French protectorate from 1863 until 1953.</p><p>3. Modern History: Suffered under the Khmer Rouge regime (1975-1979), resulting in a significant loss of life and cultural heritage.</p>'
        },
        {
          title: 'Economy',
          desc: '<p>1. Agriculture: Major sector, with rice being the staple crop.</p><p>2. Textiles: Significant contributor to the economy, with many garments exported globally.</p><p>3. Tourism: Growing industry due to historical sites and natural beauty.</p>'
        },
        {
          title: 'Society',
          desc: '<p>1. Population: Approximately 16 million people.</p><p>2. Education: Focus on improving literacy and educational standards.</p><p>3. Healthcare: Developing sector with ongoing improvements.</p>'
        },

        {
          title: 'Culture',
          desc: "<p>1. Language: Khmer is the official language.</p> <p>2. Religion: Predominantly Buddhist (Theravada Buddhism).</p> <p>3. Festivals: Khmer New Year (Chaul Chnam Thmey), Water Festival (Bon Om Touk), Pchum Ben (Ancestors' Day).</p><p>4. Cuisine: Features dishes like Amok (coconut fish curry), Lok Lak (stir-fried beef), and various rice and noodle dishes.</p> "
        },
      ],
      allMenuItems: [
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima impedit deleniti itaque dolor aperiam, velit dolore voluptas quam architecto voluptatem suscipit error exercitationem, quaerat incidunt ipsam aliq',
          desc: 'Lorem ipsum dolor sit amet, consectetur',
          image: '../src/assets/image/Rectangle9.png',
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima impedit deleniti itaque dolor aperiam, velit dolore voluptas quam architecto voluptatem suscipit error exercitationem, quaerat incidunt ipsam aliq',
          desc: 'Lorem ipsum dolor sit amet, consectetur',
          image: '../src/assets/image/Rectangle12.png',
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima impedit deleniti itaque dolor aperiam, velit dolore voluptas quam architecto voluptatem suscipit error exercitationem, quaerat incidunt ipsam aliq',
          desc: 'Lorem ipsum dolor sit amet, consectetur',
          image: '../src/assets/image/Rectangle13.png',
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima impedit deleniti itaque dolor aperiam, velit dolore voluptas quam architecto voluptatem suscipit error exercitationem, quaerat incidunt ipsam aliq',
          desc: 'Lorem ipsum dolor sit amet, consectetur',
          image: '../src/assets/image/Rectangle 46.png',
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima impedit deleniti itaque dolor aperiam, velit dolore voluptas quam architecto voluptatem suscipit error exercitationem, quaerat incidunt ipsam aliq',
          desc: 'Lorem ipsum dolor sit amet, consectetur',
          image: '../src/assets/image/Rectangle17.png',
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima impedit deleniti itaque dolor aperiam, velit dolore voluptas quam architecto voluptatem suscipit error exercitationem, quaerat incidunt ipsam aliq',
          desc: 'Lorem ipsum dolor sit amet, consectetur',
          image: '../src/assets/image/Rectangle18.png',
        },
      ],
      traditional: [
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima impedit deleniti itaque dolor aperiam, velit dolore voluptas quam architecto voluptatem suscipit error exercitationem, quaerat incidunt ipsam aliquam, deserunt quod ipsum.',
          subDesc: '',
          desc: '',
          img: '../src/assets/image/Rectangle9.png',
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima impedit deleniti itaque dolor aperiam, velit dolore voluptas quam architecto voluptatem suscipit error exercitationem, quaerat incidunt ipsam aliquam, deserunt quod ipsum.',
          subDesc: '',
          desc: '',
          img: '../src/assets/image/Rectangle6.png',
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima impedit deleniti itaque dolor aperiam, velit dolore voluptas quam architecto voluptatem suscipit error exercitationem, quaerat incidunt ipsam aliquam, deserunt quod ipsum.',
          subDesc: '',
          desc: '',
          img: '../src/assets/image/Rectangle 47.png',
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima impedit deleniti itaque dolor aperiam, velit dolore voluptas quam architecto voluptatem suscipit error exercitationem, quaerat incidunt ipsam aliquam, deserunt quod ipsum.',
          subDesc: '',
          desc: '',
          img: '../src/assets/image/Rectangle8.png',
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima impedit deleniti itaque dolor aperiam, velit dolore voluptas quam architecto voluptatem suscipit error exercitationem, quaerat incidunt ipsam aliquam, deserunt quod ipsum.',
          subDesc: '',
          desc: '',
          img: '../src/assets/image/Rectangle10.png',
        },
        // {
        //   title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima impedit deleniti itaque dolor aperiam, velit dolore voluptas quam architecto voluptatem suscipit error exercitationem, quaerat incidunt ipsam aliquam, deserunt quod ipsum.',
        //   subDesc: '',
        //   desc: '',
        //   img: '../src/assets/image/Rectangle8.png',
        // },
        // {
        //   title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima impedit deleniti itaque dolor aperiam, velit dolore voluptas quam architecto voluptatem suscipit error exercitationem, quaerat incidunt ipsam aliquam, deserunt quod ipsum.',
        //   subDesc: '',
        //   desc: '',
        //   img: '../src/assets/image/Rectangle10.png',
        // },
      ]
    }
  }

};