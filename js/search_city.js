(function(){
	
/*
    This javascript file contains var array for all cities and states for autocomplete jquery plugin.
    And call of autocomplete jquery is also present in this file only. And also contains location of cities.
*/

var location_cities = ['pune','hyderabad','mumbai','bangalore','chennai','jaipur'];

var city_location = new Object();
city_location["bangalore"] = [
"Achitnagar",
"Adugodi",
"AECS Layout", 
"Agaram",
"Air Force Hospital",
"Airport",
"Amruthahalli",
"Anand Nagar",
"Anekal",
"Anepalya",
"Anjanapura",
"Arabic College",
"Ashok Nagar",
"Attiguppe",
"Austin Town",
"Avenue Road",
"Ayappa Garden",
"Ayyappa Nagar",
"Bagalgunte",
"Bangalore Bazaar",
"Bangalore District Office",
"Bangalore Viswavidyalaya",
"Banashankari",
"Banashankari 1st Stage",
"Banashankari 2nd Stage",
"Banashankari 3rd Stage",
"Banashankari 4th Stage",
"Banashankari 5th Stage",
"Banashankari 6th Stage",
"Banashankari 7th Stage",
"Banashankari 8th Stage",
"Banaswadi",
"Bannerghatta",
"Bannerghatta Road",
"Bansawadi",
"Bapagrama",
"Bapuji Nagar",
"Bashyam Nagar",
"Basavanagudi",
"Basaveshwara Nagar",
"BEML Layout",
"Begur",
"Bellandur",
"Benson Town",
"Bhattarahalli",
"Bidadi",
"Bidrahalli",
"Bilekahalli",
"Bolare",
"Bommanahalli",
"Bommasandra Industrial Estate",
"Bone Mill",
"Brigade Road",
"Brookefield",
"BTM 1st Stage",
"BTM 2nd Stage",
"BTM Layout",
"Byatarayanapura",
"CV Raman Nagar",
"Carmelaram Road",
"Central Bengaluru",
"Chamrajpet",
"Chandapura",
"Channasandra",
"Chickpet",
"Chikkabanavara Lake",
"Chikkabidarkal",
"Chikkalasandra",
"Chudenapura",
"Church Street",
"City Centre",
"Cooke Town",
"Cottonpet",
"Cox Town",
"Crescent Road",
"CRPF Campus Yelahanka",
"Cubban Road",
"Cunningham Road",
"Dasarahalli",
"Deepanjalinagar",
"Devanagundi",
"Devanahalli",
"Devasandra Lake",
"Dharmaram College",
"Diamond District",
"Dickenson Road",
"Dlf Township",
"Doddaballapur Rd.",
"Doddagubbi",
"Doddakallasandra",
"Doddanekkundi",
"Dooravaninagar",
"Domlur",
"Dr. Ambedkar Veedhi",
"Dr. Shivarama Karanth Nagar",
"Electronic City",
"Frazer Town",
"Gandhi Nagar",
"Ganga Nagar",
"Gangamma Circle",
"Gavipuram Extension",
"Gayathrinagar",
"Girinagar",
"Gottigere",
"Govindapura",
"Gunjur",
"Guttahalli",
"HAL 1st Stage",
"HAL 2nd Stage",
"HAL 3rd Stage",
"HAL Layout",
"HBR layout",
"Hebbal",
"Hennur",
"Hosur Road",
"HSR Layout",
"Immedihalli",
"Indian Institute Of Science",
"Indlawadi Pura",
"Infantry Road",
"ISRO Layout",
"Indira Nagar",
"JC Nagar",
"J.P. Nagar",
"JP Nagar 1st Phase",
"JP Nagar 2nd Phase",
"JP Nagar 3rd Phase",
"JP Nagar 4th Phase",
"JP Nagar 5th Phase",
"JP Nagar 6th Phase",
"JP Nagar 7th Phase",
"Jakkur",
"Jayamahal Extn",
"Jayamahal Road",
"Jayanagar",
"Jayanagar 1st Block",
"Jayanagar 2nd Block",
"Jayanagar 3rd Block",
"Jayanagar 3rd Block East",
"Jayanagar 4th Block",
"Jayanagar 4th T Block",
"Jayanagar 5th Block",
"Jayanagar 6th Block",
"Jayanagar 7th Block",
"Jayanagar 8th Block",
"Jayanagar 9th Block",
"Jayanagar 1st Block",
"Jayanagar 1st Block",
"Jaylakshmi Puram",
"Jalahalli",
"Jalahalli West",
"Jalavayuvihar",
"Jeevanbhimanagar",
"Jigani",
"Jogapalya",
"K.H.B Colony",
"K.R Circle",
"K.R Market",
"K.R Puram",
"K.R Road",
"K.G Road",
"K.D. Road",
"Kacharakanahalli",
"Kadugodi",
"Kagalipura",
"Kakolu",
"Kalkere",
"Kalkunte",
"Kalyan Nagar",
"Kamakshipalya",
"Kammanahalli",
"Kanakanagar",
"Kanakapura Road",
"Kannamangala",
"Kanteeravanagar",
"Kasavanahalli",
"Kasturi Nagar",
"Kathriguppe",
"Kempapur Agrahara",
"Kempe Gowda Road",
"Kenchanahalli",
"Kengeri",
"Kodigehalli",
"Konanakunte",
"Koramangala",
"Koramangala 1st Block",
"Koramangala 2nd Block",
"Koramangala 3rd Block",
"Koramangala 4th Block",
"Koramangala 4th B Block",
"Koramangala 5th Block",
"Koramangala 6th Block",
"Koramangala 7th Block",
"Koramangala 8th Block",
"Krishnarajapuram",
"Kothanur",
"Kudlu Gate",
"Kumaraswamy Layout",
"Kumara Park",
"Kumara Park East",
"Kumara Park West",
"Kumbalagodu",
"Kundalahalli",
"Langford Town",
"Lavelle Road",
"Lingarajapuram",
"Madiwala",
"Magadi Road",
"Mahadevapura",
"Mahalakshmi Layout",
"Mallesh Palaya",
"Malleswaram",
"Marathahalli",
"Mathikere",
"MG Road Area",
"Murugesh Palya",
"Nagarbhavi",
"Nagwar",
"Old Airport Road",
"Old Madras Road",
"OMBR Layout",
"Padmanaba Nagar",
"Pai Layout",
"Palace Road",
"Rajaji Nagar",
"Rajaji Nagar 1st Block",
"Rajaji Nagar 2nd Block",
"Rajaji Nagar 3rd Block",
"Rajaji Nagar 4M Block",
"Rajaji Nagar 4N Block",
"Rajaji Nagar 5th Block",
"Rajaji Nagar 6th Block",
"Rajaji Nagar Industrial Area",
"Rajarajeshwari Nagar",
"Ramamurthi Nagar",
"Richmond Road",
"Richmond Town",
"RMV Extension Stage 2",
"RT Nagar",
"S G Palya",
"Sahakara Nagar",
"Sanjayanagar",
"Sarjapur",
"Sarjapur Road",
"Silk Board",
"Thanisandra",
"Tavarekere Main Road",
"Thippasandra",
"Tumkur Road",
"Ullal Main Road",
"Ulsoor",
"Uttarahalli",
"Varthur",
"Vidyaranyapura",
"Vigyan Nager",
"Vijayanagar",
"Whitefield",
"Yelahanka",
"Yeshwanthpur"
];

city_location["chennai"] = [
"Adambakkam",
"Adyar",
"Alwarpet",
"Alwarthirunagar",
"Ambattur",
"Aminjikarai",
"Anakaputhur",
"Annanagar",
"Annananagar W Ext",
"Arumbakkam",
"AshokNagar",
"Avadi Camp",
"Avadi IAF",
"Ayanavaram",
"Besantnagar",
"Chengalpattu",
"Chetput",
"Chitlapakkam",
"Choolai",
"Choolaimedu",
"Chromepet",
"East Coast Road",
"Egmore",
"Ekkaduthangal",
"Gowrivakkam",
"Guduvanchery",
"Guindy",
"Iyyappanthangal",
"Jaffarkhanpet",
"Kilpauk",
"KK Nagar",
"Kodambakkam",
"Kolathur, CPT",
"Korattur",
"Kotturpuram",
"Koyambedu",
"Kundrathur, Kanchi DT",
"Madhavaram",
"Madipakkam",
"Manali New Town",
"Mangadu",
"Maraimalai Nagar",
"Medavakkam",
"Minjur",
"Mogappair",
"Mylapore",
"Nandambakkam",
"Nandanam",
"Nanganallur",
"Nungambakkam",
"Old Mahabalipuram Road",
"Old pallavaram",
"Oragadam",
"Padappai",
"Padi",
"Palavakkam",
"Pallikaranai",
"Pammal",
"Pattabiram",
"Perambur",
"Perungudi",
"Poonamallee",
"Porur",
"Pozhal",
"Pozhichalur",
"Raja Annamalaipuram",
"Red Hills",
"Royapettah",
"Saidapet",
"Saligramam",
"Selaiyur",
"Singaperumal Koil",
"Sriperumbudur - Kanchi DT",
"Tambaram",
"Tambaram East",
"Tambaram Sanatorium",
"Teynampet",
"Tharamani",
"Thirumullaivoyal",
"Thiruninravur",
"Thiruvallur",
"Thiruvanmiyur",
"Thyagaraya Nagar",
"Tiruvottiyur",
"Tondiarpet",
"Triplicane",
"Urapakkam",
"Vadapalani",
"Vandalur",
"Velachery",
"Villivakkam",
"Virugambakkam",
"Vysarpadi",
"Washermenpet",
"West Mambalam"
];

city_location["jaipur"] = [
"Ajmer Road",
"Kalwar Road",
"Keshav Nagar",
"Khatipura",
"Kukas Road",
"Malviya Nagar",
"Mansarovar",
"Mohana Mandi",
"Murlipura",
"Niwaru Road",
"Omex City",
"Pratap Nagar",
"Raja Park",
"Sikar Road",
"Sirsi Road",
"Tonk Road",
"Vaishali Nagar"
];

city_location["mumbai"] = [
"Aarey Colony",
"Andheri East",
"Andheri West",
"Bandra East",
"Bandra West",
"Bangur Nagar",
"Bhandup",
"Borivali East",
"Borivali West",
"Chakala MIDC",
"Chandiwali",
"Chembur",
"Colaba",
"Dadar East",
"Dadar West",
"Dahisar",
"Deonar",
"Fort",
"Ghatkopar East",
"Ghatkopar West",
"Goregaon East",
"Goregaon West",
"Grant Road",
"IIT Powai",
"JB Nagar",
"Jogeshwari East",
"Jogeshwari West",
"Kalpataru Estate",
"Kandivali East",
"Kandivali West",
"Khar",
"Kurla",
"Mahakali Road",
"Mahim",
"Malad East",
"Malad West",
"Marol",
"Matunga",
"MIDC Andheri East",
"Mira Road",
"Mulund East",
"Mulund west",
"Mumbai Central",
"NITIE",
"Parel",
"Poonam Nagar",
"Prabhadevi",
"Raheja Sherwood",
"Sakinaka",
"Santacruz East",
"Santacruz West",
"Sewri",
"Sion",
"Tagore Nagar",
"Tilak Nagar",
"Vasai",
"Vikroli",
"Vile Parle East",
"Vile Parle West",
"Wadala",
"Worli"
];

city_location["pune"] = [
"AFMC",
"Akurdi",
"Ambeygaon",
"Aundh",
"B. T. Kawade Road",
"Balaji Nagar",
"Balewadi",
"Baner",
"Baner Pashan Link Road",
"Baner Road",
"Bavdhan",
"Bhandarkar Road",
"Bhosari",
"Bhugaon",
"Bibvewadi",
"Bopodi",
"Budhwar Peth",
"Bund Garden Road",
"Cantonment",
"Chakan",
"Chandan Nagar",
"Chikhali",
"Chinchwad",
"Deccan",
"Dehu Road",
"Dhankawadi",
"Dhanori",
"Dhole Patil Road",
"Erandwana",
"F C Road",
"Fatima Nagar",
"Fursungi",
"Hadapasar Ind. Estate",
"Hadapsar",
"Hinjewadi",
"J.M.Road",
"Kalewadi",
"Kalyani Nagar",
"Karve Nagar",
"Karve Road",
"Kasarwadi",
"Katraj",
"Khadakvasala",
"Khadki",
"Kharadi",
"Kondhwa",
"Koregoan Park",
"Kothrud",
"Law College Road",
"Lonavala",
"Lulla Nagar",
"M G Road",
"Magarpatta",
"Magarpatta Road",
"Manjari",
"Market Yard",
"Model Colony",
"Mohamedwadi",
"Mukund Nagar",
"Mundhwa",
"Nagar Road",
"Nal Stop",
"Nana Peth",
"Narayan Peth",
"NIBM",
"NIBM Road",
"Nigdi",
"Pashan",
"Pashan Sus Road",
"Paud Road",
"Pimple Gurav",
"Pimple Nilakh",
"Pimple Saudagar",
"Pimpri",
"Pimpri Chinchwad",
"Pradhikaran",
"Pune Station",
"Pune-solapur Road",
"Rahatani",
"Sadhashiv Peth",
"Salunke Vihar",
"Sanghvi",
"Satara Road",
"Senapati Bapat Road",
"Shaniwar Peth",
"Shivaji Nagar",
"Shivane",
"Shukrawar Peth",
"Sinhagad Road",
"Swargate",
"Talegaon",
"Talwade",
"Tilak Road",
"Tingre Nagar",
"Undri",
"Viman Nagar",
"Vishrantwadi",
"Wadgaon BK",
"Wadgaon Sheri",
"Wagholi",
"Wakad",
"Wakad Road",
"Wanawadi",
"Wanoworie",
"Warje",
"Yerawada"
];

city_location["hyderabad"] = [
 "Abids",
 "Amberpet",
 "Ameerpet",
 "Anjaiah Nagar",
 "Ashok Nagar",
 "Attapur", 
 "Balanagar",
 "Bandlaguda",
 "Banjara Hills",
 "Barkatpura", 
 "Begumpet", 
 "Bolarum",
 "Bowenpally",
 "Chandanagar",
 "Dilsukhnagar",
 "Domalguda", 
 "ECIL Hyderabad",
 "Gachibowli",
 "Gandhinagar",
 "Habsiguda",
 "Hayathnagar",
 "Himayat Nagar",
 "Hitech City",
 "Jeedimetla Industrial Area",
 "Jubilee Hills",
 "Khairatabad",
 "Kompally", 
 "Kondapur",
 "Kukatpally",
 "Lal Bahadur Nagar",
 "Langar House",
 "Lingampally",
 "Madhapur",
 "Malakpet Colony",
 "Malkajgiri", 
 "Manikonda",
 "Marredpally",
 "Medchal Road",
 "Mehdipatnam",
 "Miyarpur",
 "Nallagandla",
 "Nallakunta",
 "Narayanguda",
 "New Nallakunta",
 "Nizampet",
 "Outer Ring Road",
 "Punjagutta", 
 "Rajendranagar Agricultural",
 "Saidabad",
 "Sainikpuri",
 "Sanjeeva Reddy Nagar",
 "Saroornagar", 
 "Secunderabad", 
 "Shadnagar", 
 "Shamshabad",
 "Somajiguda",
 "Tarnaka", 
 "Toli Chowki",
 "Trimulgherry",
 "Uppal",
 "Vanasthalipuram",
 "Vidyanagar",
 "Yapral", 
 "Yousufguda"
];


    var states = [
    "Andaman and Nicobar Islands",
      "Andhra Pradesh (AP)",
"Arunachal Pradesh (AR)",
"Assam (AS)",
"Bihar (BR)",
"Chandigarh",
"Chhattisgarh (CG)",
"Dadra and Nagar Haveli",
"Daman and Diu" ,
"Delhi" ,
"Goa (GA)",
"Gujarat (GJ)",
"Haryana (HR)",
"Himachal Pradesh (HP)",
"Jammu and Kashmir (JK)",
"Jharkhand (JH)",
"Karnataka (KA)",
"Kerala (KL)",
"Lakshadweep",
"Madhya Pradesh (MP)",
"Maharashtra (MH)",
"Manipur (MN)",
"Meghalaya (ML)",
"Mizoram (MZ)",
"Nagaland (NL)",
"Odisha(OR)",
"Puducherry",
"Punjab (PB)",
"Rajasthan (RJ)",
"Seemandhra",
"Sikkim (SK)",
"Tamil Nadu (TN)",
"Telangana",
"Tripura (TR)",
"Uttar Pradesh (UP)",
"Uttarakhand (UK)",
"West Bengal (WB)"
    ];

    var cities = [
      "Achalpur",
"Achhnera",
"Adalaj",
"Adilabad",
"Adityapur",
"Adoni",
"Adoor",
"Adra",
"Adyar",
"Afzalpur",
"Agartala",
"Agra",
"Ahmedabad",
"Ahmednagar",
"Aizawl",
"Ajmer",
"Akola",
"Akot",
"Alappuzha",
"Aligarh",
"Alipurduar",
"Allahabad",
"Alwar",
"Amalapuram",
"Amalner",
"Ambejogai",
"Ambikapur",
"Amravati",
"Amreli",
"Amritsar",
"Amroha",
"Anakapalle",
"Anand",
"Anantapur",
"Anantnag",
"Anjangaon",
"Anjar",
"Ankleshwar",
"Arakkonam",
"Arambagh",
"Araria",
"Arrah",
"Arsikere",
"Aruppukkottai",
"Arvi",
"Arwal",
"Asansol",
"Asarganj",
"Ashok",
"Athni",
"Aurangabad",
"Azamgarh",
"Badharghat",
"Bhiwandi",
"Bagaha",
"Bageshwar",
"Bahadurgarh",
"Baharampur",
"Bahraich",
"Balaghat",
"Balangir",
"Baleshwar",
"Bangalore",
"Bankura",
"Bapatla",
"Baramula",
"Barbil",
"Bargarh",
"Barh",
"Baripada",
"Barnala",
"Barpeta",
"Batala",
"Bathinda",
"Begusarai",
"Belgaum",
"Bellampalle",
"Bettiah",
"Bhabua",
"Bhadrachalam",
"Bhadrak",
"Bhagalpur",
"Bhainsa",
"Bharuch",
"Bhatapara",
"Bhavnagar",
"Bhawanipatna",
"Bheemunipatnam",
"Bhimavaram",
"Bhiwani",
"Bhongir",
"Bhopal",
"Bhuj",
"Bhuwaneshwar",
"Bihar",
"Bijapur",
"Bilaspur",
"Bobbili",
"Bodhan",
"Bokaro",
"Bongaigaon",
"Brahmapur",
"Brajrajnagar",
"Buxar",
"Byasanagar",
"Chaibasa",
"Parishad",
"Charkhi",
"Chatra",
"Chalakudy",
"Changanassery",
"Chennai",
"Cherthala",
"Chhapra",
"Chilakaluripet",
"Chirala",
"Chirkunda",
"Chirmiri",
"Chinsura",
"Chittur-Thathamangalam",
"Chittoor",
"Coimbatore",
"Cuddapah",
"Cuttack",
"Dahod",
"Dalli-Rajhara",
"Daltonganj",
"Darbhanga",
"Darjiling",
"Davanagere",
"Deesa",
"Dehradun",
"Dehri-on-Sone",
"Delhi",
"Deoghar",
"Dhamtari",
"Dhanbad",
"Dharmapuri",
"Dharmavaram",
"Dhenkanal",
"Dhoraji",
"Dhubri",
"Dhule",
"Dhuri",
"Dibrugarh",
"Dimapur",
"Diphu",
"Dombivli",
"Dumka",
"Dumraon",
"Durg-Bhilai",
"Faridabad",
"Faridkot",
"Firozabad",
"Farooqnagar",
"Fatehabad",
"Fazilka",
"Forbesganj",
"Firozpur",
"Firozpur",
"Fatehpur",
"Gadwal",
"Gaya",
"Giridih",
"Goalpara",
"Gobichettipalayam",
"Gobindgarh",
"Godhra",
"Gohana",
"Gokak",
"Gooty",
"Gopalganj",
"Parishad",
"Gudivada",
"Gudur",
"Gulbarga",
"Gumia",
"Guntakal",
"Guntur",
"Gurdaspur",
"Gurgaon",
"Guruvayoor",
"Guwahati",
"Hajipur",
"Haldwani-cum-Kathgodam",
"Hansi",
"Hapur",
"Hazaribag",
"Hindupur",
"Hisar",
"Hoshiarpur",
"Hubli-Dharwad",
"Hyderabad",
"Ichalkaranji",
"Imphal",
"Indore",
"Itarsi",
"Jabalpur",
"Jagdalpur",
"Jaggaiahpet",
"Jagraon",
"Jagtial",
"Jaipur",
"Jajmau",
"Jalandhar",
"Jalandhar",
"Jalpaiguri",
"Jamalpur",
"Jammikunta",
"Jammalamadugu",
"Jammu",
"Jamnagar",
"Jamshedpur",
"Jamui",
"Jangaon",
"Jatani",
"Jehanabad",
"Jeypur",
"Jhansi",
"Jhargram",
"Jharsuguda",
"Jhumri",
"Jind",
"Jodhpur",
"Jorhat",
"Godavari",
"Ekambareswarar",
"Lighthouse",
"International",
"IIT",
"Kochi",
"DLF",
"Kadi",
"Kadiri",
"Kagaznagar",
"Kaithal",
"Kakinada",
"Kalpi",
"Kalyan",
"Kamareddy",
"Kancheepuram",
"Kandukur",
"Kanhangad",
"Kannur",
"Kanpur",
"Kapadvanj",
"Kapurthala",
"Karaikal",
"Karimganj",
"Karimnagar",
"karjat",
"Karnal",
"Karur",
"Karwar",
"Kasaragod",
"Kashipur",
"Kathua",
"Katihar",
"Kavali",
"Kayamkulam",
"Kendrapara",
"Kendujhar",
"Keshod",
"Khagaria",
"Khambhat",
"Khammam",
"Khanna",
"Kharagpur",
"Kharar",
"Kishanganj",
"Kochi",
"Kodungallur",
"Kohima",
"Kolar",
"Kolkata",
"Kollam",
"Korba",
"Koratla",
"Kot",
"Kothagudem",
"Kottayam",
"Kovvur",
"Kozhikode",
"Kunnamkulam",
"Kurnool",
"Kyathampalle",
"Shanti",
"Lonavala",
"Lucknow",
"Majestic",
"Lachhmangarh",
"Ladnu",
"Ladwa",
"Lahar",
"Laharpur",
"Lakheri",
"Lakhimpur",
"Lakhisarai",
"Lakshmeshwar",
"Lal",
"Lalganj",
"Lalgudi",
"Lalitpur",
"Lalganj",
"Lalsot",
"Lanka",
"Lar",
"Lathi",
"Latur",
"Leh",
"Lilong",
"Limbdi",
"Lingsugur",
"Loha",
"Lohardaga",
"Lonar",
"Lonavla",
"Longowal",
"Loni",
"Losal",
"Ludhiana",
"Lumding",
"Lunawada",
"Lundi",
"Lunglei",
"Machilipatnam,",
"Meenakshi",
"Mandi",
"Ullal",
"Medak",
"Science",
"Shaheed",
"Gurudwara",
"Hill",
"Mumbai",
"Kempty",
"Railway",
"Macherla",
"Machilipatnam",
"Madanapalle",
"Maddur",
"Madhepura",
"Madhubani",
"Madhugiri",
"Madhupur",
"Madikeri",
"Madurai",
"Magadi",
"Mahad",
"Mahbubnagar",
"Mahalingapura",
"Maharajganj",
"Maharajpur",
"Mahasamund",
"Mahe",
"Mahendragarh",
"Mahendragarh",
"Mahesana",
"Mahidpur",
"Mahnar",
"Mahuva",
"Maihar",
"Mainaguri",
"Makhdumpur",
"Makrana",
"Malda",
"Malaj",
"Malappuram",
"Malavalli",
"Malegaon",
"Malerkotla",
"Malkangiri",
"Malkapur",
"Malout",
"Malpura",
"Malur",
"Manasa",
"Manavadar",
"Manawar",
"Mancherial",
"Mandalgarh",
"Mandamarri",
"Mandapeta",
"Mandawa",
"Mandi",
"Mandi",
"Mandideep",
"Mandla",
"Mandsaur",
"Mandvi",
"Mandya",
"Maner",
"Mangaldoi",
"Mangalore",
"Mangalvedhe",
"Manglaur",
"Mangrol",
"Mangrol",
"Mangrulpir",
"Manihari",
"Manjlegaon",
"Mankachar",
"Manmad",
"Mansa",
"Mansa",
"Manuguru",
"Manvi",
"Manwath",
"Mapusa",
"Margao",
"Margherita",
"Marhaura",
"Mariani",
"Marigaon",
"Markapur",
"Marmagao",
"Masaurhi",
"Mathabhanga",
"Mattannur",
"Mauganj",
"Mavelikkara",
"Mavoor",
"Mayang",
"Medak",
"Medinipur",
"Meerut",
"Mehkar",
"Mehmedabad",
"Memari",
"Merta",
"Mhaswad",
"Mhow",
"Mhowgaon",
"Mihijam",
"Mira-Bhayandar",
"Mirganj",
"Miryalaguda",
"Modasa",
"Modinagar",
"Moga",
"Mohali",
"Mokameh",
"Mokokchung",
"Monoharpur",
"Moradabad",
"Morena",
"Morinda",
"Morshi",
"Morvi",
"Motihari",
"Motipur",
"Mount",
"Mudalagi",
"Mudabidri",
"Muddebihal",
"Mudhol",
"Mukerian",
"Mukhed",
"Muktsar",
"Mul",
"Mulbagal",
"Multai",
"Mumbai",
"Mundi",
"Mundargi",
"Mungeli",
"Munger",
"Murliganj",
"Murshidabad",
"Murtijapur",
"Murwara",
"Musabani",
"Mussoorie",
"Muvattupuzha",
"Muzaffarpur",
"Nabadwip",
"Nabarangapur",
"Nabha",
"Nadbai",
"Nadiad",
"Nidagundi",
"Nagaon",
"Nagapattinam",
"Nagar",
"Nagari",
"Nagarkurnool",
"Nagaur",
"Nagda",
"Nagercoil",
"Nagina",
"Nagla",
"Nagpur",
"Nahan",
"Naharlagun",
"Naihati",
"Naila",
"Nainital",
"Nainpur",
"Najafgarh",
"Najibabad",
"Nakodar",
"Nakur",
"Nalasopara",
"Nalbari",
"Namagiripettai",
"Namakkal",
"Nanded-Waghala",
"Nandgaon",
"Nandivaram-Guduvancheri",
"Nandura",
"Nandurbar",
"Nandyal",
"Nangal",
"Nanjangud",
"Nanjikottai",
"Nanpara",
"Narasapur",
"Narasaraopet",
"Naraura",
"Narayanpet",
"Narela",
"Nargund",
"Narkatiaganj",
"Narkhed",
"Narnaul",
"Narsinghgarh",
"Narsinghgarh",
"Narsipatnam",
"Narwana",
"Nashik",
"Nasirabad",
"Natham",
"Nathdwara",
"Naugachhia",
"Naugawan",
"Nautanwa",
"Navalgund",
"Navi",
"Navsari",
"Nawabganj",
"Nawada",
"Nawagarh",
"Nawalgarh",
"Nawanshahr",
"Nawapur",
"Nedumangad",
"Neem-Ka-Thana",
"Neemuch",
"Nehtaur",
"Nelamangala",
"Nellikuppam",
"Nellore",
"Nepanagar",
"New Delhi",
"Neyveli",
"Neyyattinkara",
"Nidadavole",
"Nilanga",
"Nilambur",
"Nimbahera",
"Nippani",
"Nirmal",
"Niwai",
"Niwari",
"Nizamabad",
"Nohar",
"Noida",
"Nokha",
"Nokha",
"Nongstoin",
"Noorpur",
"North",
"Nowgong",
"Nowrozabad",
"Nuzvid",
"NH",
"O'",
"Oddanchatram",
"Obra",
"Ongole",
"Orai",
"Osmanabad",
"Ottappalam",
"Ozar",
"P.N.Patti",
"Pachora",
"Pachore",
"Pacode",
"Padmanabhapuram",
"Padra",
"Padrauna",
"Paithan",
"Pakaur",
"Palacole",
"Palai",
"Palakkad",
"Palani",
"Palanpur",
"Palasa",
"Palghar",
"Pali",
"Pali",
"Palia",
"Palitana",
"Palladam",
"Pallapatti",
"Pallikonda",
"Palwal",
"Palwancha",
"Panagar",
"Panagudi",
"Panaji",
"Panamattom",
"Panchkula",
"Panchla",
"Pandharkaoda",
"Pandharpur",
"Pandhurna",
"Pandua",
"Panipat",
"Panna",
"Panniyannur",
"Panruti",
"Panvel",
"Pappinisseri",
"Paradip",
"Paramakudi",
"Parangipettai",
"Parasi",
"Paravoor",
"Parbhani",
"Pardi",
"Parlakhemundi",
"Parli",
"Parola",
"Partur",
"Parvathipuram",
"Pasan",
"Paschim",
"Pasighat",
"Patan",
"Pathanamthitta",
"Pathankot",
"Pathardi",
"Pathri",
"Patiala",
"Patna",
"Patran",
"Patratu",
"Pattamundai",
"Patti",
"Pattukkottai",
"Patur",
"Pauni",
"Pauri",
"Pavagada",
"Pedana",
"Peddapuram",
"Pehowa",
"Pen",
"Perambalur",
"Peravurani",
"Peringathur",
"Perinthalmanna",
"Periyakulam",
"Periyasemur",
"Pernampattu",
"Perumbavoor",
"Petlad",
"Phagwara",
"Phalodi",
"Phaltan",
"Phillaur",
"Phulabani",
"Phulera",
"Phulpur",
"Phusro",
"Pihani",
"Pilani",
"Pilibanga",
"Pilibhit",
"Pilkhuwa",
"Pindwara",
"Pinjore",
"Pipar",
"Pipariya",
"Piro",
"Piriyapatna",
"Pithampur",
"Pithapuram",
"Pithoragarh",
"Pollachi",
"Polur",
"Pondicherry",
"Ponnani",
"Ponneri",
"Ponnur",
"Porbandar",
"Porsa",
"Port Blair",
"Powayan",
"Prantij",
"Pratapgarh",
"Pratapgarh",
"Prithvipur",
"Proddatur",
"Pudukkottai",
"Pudupattinam",
"Pukhrayan",
"Pulgaon",
"Puliyankudi",
"Punalur",
"Punch",
"Pune",
"Punjaipugalur",
"Punganur",
"Puranpur",
"Purna",
"Puri",
"Purnia",
"Purquazi",
"Purulia",
"Purwa",
"Pusad",
"Puttur",
"Puthuppally",
"Puttur",
"Qadian",
"Quilandy",
"Rabkavi",
"Radhanpur",
"Rae",
"Rafiganj",
"Raghogarh-Vijaypur",
"Raghunathpur",
"Raghunathganj",
"Rahatgarh",
"Rahuri",
"Raayachuru",
"Raiganj",
"Raigarh",
"Ranipet",
"Raikot",
"Rairangpur",
"Raipur",
"Raisen",
"Raisinghnagar",
"Rajagangapur",
"Rajahmundry",
"Rajakhera",
"Rajaldesar",
"Rajam",
"Rajampet",
"Rajapalayam",
"Rajauri",
"Rajgarh",
"Rajgarh",
"Rajgarh",
"Rajgir",
"Rajkot",
"Rajnandgaon",
"Rajpipla",
"Rajpura",
"Rajsamand",
"Rajula",
"Rajura",
"Ramachandrapuram",
"Ramagundam",
"Ramanagaram",
"Ramanathapuram",
"Ramdurg",
"Rameshwaram",
"Ramganj",
"Ramgarh",
"Ramngarh",
"Ramnagar",
"Ramnagar",
"Rampur",
"Rampur",
"Rampur",
"Rampura",
"Rampurhat",
"Ramtek",
"Ranaghat",
"Ranavav",
"Ranchi",
"Rangia",
"Rania",
"Ranibennur",
"Rapar",
"Rasipuram",
"Rasra",
"Ratangarh",
"Rath",
"Ratia",
"Ratlam",
"Ratnagiri",
"Rau",
"Raurkela",
"Raver",
"Rawatbhata",
"Rawatsar",
"Raxaul",
"Rayachoti",
"Rayadurg",
"Rayagada",
"Reengus",
"Rehli",
"Renigunta",
"Renukoot",
"Reoti",
"Repalle",
"Revelganj",
"Rewa",
"Rewari",
"Rishikesh",
"Risod",
"Robertsganj",
"Robertson",
"Rohtak",
"Ron",
"Roorkee",
"Rosera",
"Rudauli",
"Rudrapur",
"Rudrapur",
"Rupnagar",
"Sabalgarh",
"Sadabad",
"Sadalagi",
"Sadasivpet",
"Sadri",
"Sadulshahar",
"Sadulpur",
"Safidon",
"Safipur",
"Sagar",
"Sagara",
"Sagwara",
"Saharanpur",
"Saharsa",
"Sahaspur",
"Sahaswan",
"Sahawar",
"Sahibganj",
"Sahjanwa",
"Saidpur",
"Saiha",
"Sailu",
"Sainthia",
"Sakaleshapura",
"Sakti",
"Salaya",
"Salem",
"Salur",
"Samalkha",
"Samalkot",
"Samana",
"Samastipur",
"Sambalpur",
"Sambhal",
"Sambhar",
"Samdhan",
"Samthar",
"Sanand",
"Sanawad",
"Sanchore",
"Sarsod",
"Sindagi",
"Sandi",
"Sandila",
"Sandur",
"Sangamner",
"Sangareddy",
"Sangaria",
"Sangli",
"Sangole",
"Sangrur",
"Sankarankoil",
"Sankari",
"Sankeshwara",
"Santipur",
"Sarangpur",
"Sardarshahar",
"Sardhana",
"Sarni",
"Sasaram",
"Sasvad",
"Satana",
"Satara",
"Satna",
"Sathyamangalam",
"Sattenapalle",
"Sattur",
"Saunda",
"Saundatti-Yellamma",
"Sausar",
"Savarkundla",
"Savanur",
"Savner",
"Sawai",
"Sawantwadi",
"Secunderabad",
"Sedam",
"Sehore",
"Sendhwa",
"Seohara",
"Seoni",
"Seoni-Malwa",
"Shahabad",
"Shahabad,",
"Shahabad,",
"Shahade",
"Shahbad",
"Shahdol",
"Shahganj",
"Shahjahanpur",
"Shahpur",
"Shahpura",
"Shahpura",
"Shajapur",
"Shamgarh",
"Shamli",
"Shamsabad,",
"Shamsabad,",
"Shegaon",
"Sheikhpura",
"Shendurjana",
"Shenkottai",
"Sheoganj",
"Sheohar",
"Sheopur",
"Sherghati",
"Sherkot",
"Shiggaon",
"Shikaripur",
"Shikarpur,",
"Shikohabad",
"Shimla",
"Shivamogga",
"Shirdi",
"Shirpur-Warwade",
"Shirur",
"Shillong",
"Shishgarh",
"Shivpuri",
"Sholavandan",
"Sholingur",
"Shoranur",
"Surapura",
"Shrigonda",
"Shrirampur",
"Shrirangapattana",
"Shujalpur",
"Siana",
"Sibsagar",
"Siddipet",
"Sidhi",
"Sidhpur",
"Sidhalaghatta",
"Sihor",
"Sihora",
"Sikanderpur",
"Sikandra",
"Sikandrabad",
"Sikar",
"Silao",
"Silapathar",
"Silchar",
"Siliguri",
"Sillod",
"Simdega",
"Sindhagi",
"Sindhnur",
"Singrauli",
"Sinnar",
"Sira",
"Sircilla",
"Sirhind",
"Sirkali",
"Sirohi",
"Sironj",
"Sirsa",
"Sirsaganj",
"Sirsi",
"Sirsi",
"Siruguppa",
"Sitamarhi",
"Sitapur",
"Sitarganj",
"Sivaganga",
"Sivagiri",
"Sivakasi",
"Siwan",
"Sohagpur",
"Sohna",
"Sojat",
"Solan",
"Solapur",
"Sonamukhi",
"Sonepur",
"Songadh",
"Sonipat",
"Sopore",
"Soro",
"Soron",
"Soyagaon",
"Srinagar",
"Srikakulam",
"Srikalahasti",
"Srinivaspur",
"Srisailam",
"Srirampore",
"Srivilliputhur",
"Suar",
"Sugauli",
"Sujangarh",
"Sujanpur",
"Sultanganj",
"Sultanpur",
"Sumerpur",
"Sumerpur",
"Sunabeda",
"Sunam",
"Sundargarh",
"Sundarnagar",
"Supaul",
"Surandai",
"Surat",
"Suratgarh",
"Suri",
"Suriyampalayam",
"Suryapet",
"Tadepalligudem",
"Tadpatri",
"Taki",
"Talaja",
"Talcher",
"Talegaon",
"Talikota",
"Taliparamba",
"Talode",
"Talwara",
"Tamluk",
"Tanda",
"Tandur",
"Tanuku",
"Tarakeswar",
"Tarana",
"Taranagar",
"Taraori",
"Tarbha",
"Tarikere",
"Tarn",
"Tasgaon",
"Tehri",
"Tekkalakote",
"Tenali",
"Tenkasi",
"Tenu",
"Terdal",
"Tezpur",
"Thakurdwara",
"Thammampatti",
"Thana",
"Thane",
"Thanesar",
"Thangadh",
"Thanjavur",
"Tharad",
"Tharamangalam",
"Tharangambadi",
"Theni",
"Thirumangalam",
"Thirupuvanam",
"Thiruthuraipoondi",
"Thiruvalla",
"Thiruvallur",
"Thiruvananthapuram",
"Thiruvarur",
"Thodupuzha",
"Thoubal",
"Thrissur",
"Thuraiyur",
"Tikamgarh",
"Tilda",
"Tilhar",
"Talikota",
"Tindivanam",
"Tinsukia",
"Tiptur",
"Tirora",
"Tiruchendur",
"Tiruchengode",
"Tiruchirappalli",
"Tirukalukundram",
"Tirukkoyilur",
"Tirunelveli",
"Tirupathur",
"Tirupathur",
"Tirupati",
"Tiruppur",
"Tirur",
"Tiruttani",
"Tiruvannamalai",
"Tiruvethipuram",
"Tiruvuru",
"Tirwaganj",
"Titlagarh",
"Tittakudi",
"Todabhim",
"Todaraisingh",
"Tohana",
"Tonk",
"Tuensang",
"Tuljapur",
"Tulsipur",
"Tumkur",
"Tumsar",
"Tundla",
"Tuni",
"Tura",
"Uchgaon",
"Udaipur",
"Udaipur",
"Udaipurwati",
"Udgir",
"Udhagamandalam",
"Udhampur",
"Udumalaipettai",
"Udupi",
"Ujhani",
"Ujjain",
"Umarga",
"Umaria",
"Umarkhed",
"Umbergaon",
"Umred",
"Umreth",
"Una",
"Unjha",
"Unnamalaikadai",
"Unnao",
"Upleta",
"Uran",
"Uran",
"Uravakonda",
"Urmar",
"Usilampatti",
"Uthamapalayam",
"Uthiramerur",
"Utraula",
"Vadakara",
"Vadakkuvalliyur",
"Vadalur",
"Vadgaon",
"Vadipatti",
"Vadnagar",
"Vadodara",
"Vaijapur",
"Vaikom",
"Valparai",
"Valsad",
"Vandavasi",
"Vaniyambadi",
"Vapi",
"Vapi",
"Varanasi",
"Varkala",
"Vasai-Virar",
"Vedaranyam",
"Vellakoil",
"Vellore",
"Venkatagiri",
"Veraval",
"Vidisha",
"Vijainagar,",
"Vijapur",
"Vijaypur",
"Vijayapura",
"Vijayawada",
"Vikarabad",
"Vikramasingapuram",
"Viluppuram",
"Vinukonda",
"Viramgam",
"Virudhachalam",
"Virudhunagar",
"Visakhapatnam",
"Visnagar",
"Viswanatham",
"Vita",
"Vizianagaram",
"Vrindavan",
"Vyara",
"Vyara"
    ];

window.search_locality = function(str, callback){
	var matched_str; 
	var match_city;
	location_cities.forEach(function(state){
		if(!match_city){
			var cities = city_location[state];
			match_city = cities.filter(function(city){
				var reg = new RegExp(city, "i");
				return str.match(reg);
			});
			if(match_city && !match_city.length > 0){
				match_city = undefined;
			}
		}
	});
	if(!match_city || !match_city[0]){
		match_city = cities.filter(function(city){
			var reg = new RegExp(city, "i");
			return str.match(reg);
		})
	}

	if(match_city && match_city[0]){
		$.ajax({
			url: 'https://buy.housing.com/api/v0/search/suggest/?&string=' + match_city[0],
			success: function(data){
				console.log("housing api result is ");
				console.log(data);
				callback(data[0].city_id);
			}
		})
	}
	else{
		console.log("locality not found");
	}
	
}

})()