<template>
    <form @submit.prevent="submitForm">
      <div>
        <pre>
          {{ JSON.stringify(formValues) }}
        </pre>
      </div>
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model.trim.lazy="formValues.name">
      </div>
      <div>
        <label for="profile">Profile</label>
        <textarea  id="profile" v-model="formValues.profile"></textarea>
      </div>
      <div>
        <label for="cars">Country</label>
        <select name="cars" id="country" v-model="formValues.country">
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="austrilla">Austrilla</option>
        </select>
      </div>
      <div>
        <label for="cars">Country</label>
        <select name="cars" id="job-locations" multiple v-model="formValues.joblocations">
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="austrilla">Austrilla</option>
        </select>
      </div>
      <div>
        <input type="checkbox" id="work" v-model="formValues.workOption" true-value="yes" false-value="no">
        <label for="work">Open to Work</label>
      </div>

      <div>
        <h3>Skill Set</h3>
        <input type="checkbox" id="html" value="HTML" v-model="formValues.skillSet">
        <label for="work">HTML</label>

        <input type="checkbox" id="CSS" value="CSS" v-model="formValues.skillSet">
        <label for="work">CSS</label>

        <input type="checkbox" id="Javascript" value="Javascript" v-model="formValues.skillSet">
        <label for="work">Javascript</label>
      </div>

      <div>
        <h3>Experience</h3>
        <input type="radio" id="fresher" value="0-2" v-model="formValues.experience">
        <label for="0-2">0-2</label>
-
        <input type="radio" id="intermediate" value="2-4" v-model="formValues.experience">
        <label for="2-4">2-4</label>

        <input type="radio" id="senior" value="4-6" v-model="formValues.experience">
        <label for="work">4-6</label>
      </div>

      <div>
        <button>Submit Form</button>
      </div>
    </form>
</template>

<script>
    export default{
        name:"FormHandling",
        data(){
            return{
                formValues:{
                name: '',
                profile: '',
                country: '',
                joblocations:[],
                workOption:"no",
                skillSet:[],
                experience: ''
              },
            }
        },
        methods:{
            submitForm(event){
                event.preventDefault();
                console.log('FormValues', this.formValues);
            },
        }
    }
</script>