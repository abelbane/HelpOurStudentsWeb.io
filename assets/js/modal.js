
var donaldBio = "Don Stephenson joined the federal Public Service in 1981 and held several senior positions at Consumer & Corporate Affairs Canada, Industry Canada, Western Economic Diversification, Heritage Canada, Foreign Affairs and International Trade. In 2002-2004, he was Assistant Secretary to the Cabinet, Economic & Regional Development Policy, Privy Council Office. He then became Ambassador and Permanent Representative of Canada to the Office of the United Nations and the World Trade Organization in Geneva. He served for two years as Chairman of the Non-Agricultural Market Access (NAMA) trade negotiations. Mr. Stephenson was Assistant Deputy Minister, Trade Policy and Negotiations, from September 2008 until his retirement in September 2011."+
                "He continues to serve as Canada’s Chief Negotiator for the Canada-India Comprehensive Economic Partnership Agreement and lectures at the Norman Patterson School of International Affairs and the Centre for Trade Policy and Law. Don is the Vice-President of the Help Our Students Program.";
var peterBio = "Peter Nicholson started his financial services business in 1987 at the age of 22. Since 1995, Peter has been a recognized leader in Canadian tax assisted investments, with a specialized focus on philanthropic tax planning and tax reduction. President-Peter-Nicholson. " +
                "Through his work with countless donors, foundations, institutions, and boards, he has helped generate in excess of $250 million for client donations. Nicholson is also a generous philanthropist in his own right and a tireless supporter of community initiatives. "+
                "Over the years, Nicholson has served as a dedicated champion and board member for many foundations all across Canada, such as Winnipeg’s Canadian Museum of Human Rights, Children’s Hospital of Eastern Ontario, Ottawa Regional Cancer Foundation and founder of the Exuma Foundation of Canada. He is also a member of the Canadian Association of Gift Planners (CAGP), Association of Fundraising Professionals of Canada (AFP), the Clinton Global Initiative, and a ten-year veteran of the investment club Tiger 21. " +
                "Since 1993, he has qualified for the Million Dollar Round Table (annual qualification is limited to the top 1 % of finance professionals in the world)." +
                "He spends his time between Ottawa, Nova Scotia and Exuma, The Bahamas with Anabel and their six children, ranging in age from 23 to 5 years old";
var richardBio = "A graduate of the Royal Military College in 1967, Richard served in the Canadian Forces until 1975 when he joined the National Arts Centre.  During his 20-year career at the NAC, he rose to become the Managing Director, Operations, a position he held until early retirement in 1995. As a consultant in the arts and sports, he conducted a Feasibility and Content Study for the City of Ottawa that led to the building of the Shenkman Centre in Orleans. Since 2010, he has devoted himself to managing the Help Our Students Program."
var lindaBio = "Linda received her Bachelor’s Degree in Psychology from the University of Ottawa.  She worked in Policy and Procurement at the National Research Council and at Health Canada, and as a Director at the Canada Revenue Agency. Linda retired in 2008. Linda is the Secretary of the Help Our Students Program.";
var chrisBio = "Chris is a graduate of Carleton University (BSc.), the University of Ottawa (MD), and Concordia University’s Executive MBA program. For most of his career he practiced orthopedic surgery at The Ottawa Hospital. He was the previous Chief of Staff of The Ottawa Hospital (1998-2008 ) and was appointed in 2013 as the interim Chief of Staff at Bruyère Hospital." +
               "He is a founder and the first president of The Canadian Society of Physician Leaders. Today he is a corporate director and a consultant working with health care and similar organizations." + 
               "He is presently a director and chair at The Mach-Gaensslen Foundation."
               "He is a past director of several boards including: Canadian Medical Association Foundation (past Chair), Canadian Medical Association Holdings 2018 (past Chair), Carleton University (past Chair), Ottawa International Airport Authority (past Chair), Canadian Blood Services, Accreditation Canada, The Ottawa Hospital, Ashbury College Board (past Chair) and Ashbury College Foundation (past Chair).";
var suzanneBio = "Suzanne is a former registered nurse from St. Mary's Hospital in Montreal.  She obtained a Bachelor's degree in Administration at Ottawa University and worked as Office Manager and on-site LAN Administrator for a research institute until her retirement. A volunteer of several ministries at her local church, Suzanne also volunteers at Montfort Hospital, organizing the May and November Craft Fairs. She is a big supporter of Richard's Help Our Students Program.";
var carmanBio = "Carman Joynt is a retired Partner with Deloitte & Touche, Chartered Accountants and Management Consultants. He holds a Bachelor of Commerce from Carleton University and an Institute of Corporate Directors certification. He is also a Fellow of the Institute of Chartered Accountants of Ontario. Mr. Joynt has served the public in various volunteer roles, including past chair of the Ottawa Civic Hospital Foundation, past director of the Home Hospital of Ottawa-Carleton and past governor of Algonquin College in Ottawa." +
                "First appointed to the Mint's Board of Directors on November 22, 2007, Mr. Joynt was appointed Chair of the Board of Directors on February 5, 2015 for a five-year term. Mr. Joynt has been awarded the Queen’s Diamond Jubilee Medal for volunteerism.";
var genevieveBio = "Gen has an Honours Degree in English and Sociology from Carleton University. Having graduated from University of Ottawa with a Bachelor of Education, Gen has been teaching at St. Matthew Catholic High School for the past 18 years. She teaches Junior and Senior English, and Senior Social Sciences. In addition, Gen has coached soccer at the high school and community level, and rugby at the high school level. As a member of the school community, she sees first hand the need for the Host Program and the difference it makes in the lives of her students.";
var susanBio = "A Carleton University Grad (Arts 67), Susan taught at Woodroffe High School for four years before leaving full-time employment. Following some time at McGill University, she taught in or managed ESL programs on a part-time basis for a number of years." + 
                "Susan is a mother of four children and assisted in the early operation of her late husband's companies. She spent many years helping out with various community and family events, kids' sports and the care of the older generations as the family has longevity genes." +
                "In recent years she has volunteered with ORCF, Red Cross Tiffany Circle, and other community organizations. She enjoys hosting events and sharing her heritage home and adjoining wetlands with other worthwhile groups.";
var michaelBio = "Michael served as President of Stratos from 2005-2012, and was recently appointed Chairman. He works as a strategic advisor in corporate sustainability and public sector engagements, helping businesses, governments and not-for-profits improve performance, and build lasting value. His focus is working with leaders in Canada’s natural resource sectors and the North to recognize and act on environmental, social and economic risks and opportunities. In addition to strategy and management consulting, Michael works with clients and communities of interest to design, manage, and facilitate consultation and engagement processes on a range of sustainability issues. Prior to joining Stratos, Michael worked in a large national consulting firm, as an environmental manager in industry and government, and as an operational engineer." + 
                  "Michael graduated from the Royal Military College of Canada, participated in the Leadership Forum at the University of Ottawa, School of Management Centre for Executive Education, and is a Registered Professional Engineer in the Province of Alberta.";
var mohamedBio = "Mohamed leads the Deloitte Family Enterprise team, working to bring the full breadth of Deloitte services to Family Enterprises, HNW Families and Family Offices. He specializes in personal and corporate taxation. With more than 16 years of experience working with private companies and HNW clients, Mohamed has advised on a variety of domestic and international issues—including acquisitions and divestitures, alternative-financing arrangements, executive compensation, strategies for maximizing family wealth and community impact, and cross-border-company purchases and family-business moves. Additionally, Mohamed has helped executives navigate pre- and post-IPO challenges, including concerns involving donations and tax efficiency.";





var btn;
var modalHeaderText = "";
var modalBioText = "";
var modal = document.getElementById('myModal');

function runModal(selectedButton){
  modal.style.display = "block";
  btn = selectedButton;

    if(selectedButton.id == 'peterBio'){
      modalHeaderText = "Peter Nicholson";
      modalBioText = peterBio;      
    }
    else if (selectedButton.id == 'richardBio'){
      modalHeaderText = "Richard Lussier, CD"
      modalBioText = richardBio; 
    } else if (selectedButton.id == 'donaldBio'){
      modalHeaderText = "Donald J. Stephenson"
      modalBioText = richardBio; 
    } else if (selectedButton.id == 'lindaBio'){
      modalHeaderText = "Linda Lussier"
      modalBioText = lindaBio; 
    } else if (selectedButton.id == 'chrisBio'){
      modalHeaderText = "Dr. Chris Carruthers, MD"
      modalBioText = chrisBio; 
    } else if (selectedButton.id == 'suzanneBio'){
      modalHeaderText = "Suzanne Donnelly"
      modalBioText = suzanneBio;
    } else if (selectedButton.id == 'carmanBio'){
      modalHeaderText = "Carman Joynt, FCPA, FCA, ICD.D"
      modalBioText = carmanBio;
    } else if (selectedButton.id == 'genevieveBio'){
      modalHeaderText = "Genevieve Kosavic"
      modalBioText = genevieveBio;
    } else if (selectedButton.id == 'susanBio'){
      modalHeaderText = "Susan Prior"
      modalBioText = susanBio;
    } else if (selectedButton.id == 'michaelBio'){
      modalHeaderText = "Michael van Aanhout"
      modalBioText = michaelBio;
    } else if (selectedButton.id == 'mohamedBio'){
      modalHeaderText = "Mohamed Sheibani"
      modalBioText = mohamedBio;
    } 
  var modalBio = document.getElementById("textBio").textContent = modalBioText;
  var modalHeaderH2 = document.getElementById("modelheaderText").textContent = modalHeaderText;

// Get the button that opens the modal
// var btn = document.getElementsByClassName("toBio");
  
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

