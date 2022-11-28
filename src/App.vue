<template>
  <div>
    <!-- <Binding-text></Binding-text>
    <BindingHtml/>
    <BindingToAttributes/>
    <BindingInlineStyle/>
    <ConditionalRendering/>
    <ListRendering/>
    <ConditionalListRendering/>
    <MethodsRendering/>
    <EventHandling/>
    <FormHandling/>
    <OnceAndPre/>
    <ComputedProperties/>
    <ComputedPropertiesAndConditionalRendering/>
    <ComputedSetter/>
    <WatchersVue/>
    <ImmediateAndDeepWatchers/>
    <ComponentProps name="Saikumar" leader="PSPK"/>
    <ComponentProps name="Brad" leader="CBN"/>
    <ComponentProps name="Greed" leader="BSY"/>
    <ComponentProps :name="name" :leader="leader"/> -->
    <!-- <PropTypesAndValidation titile="Article title" :likes="50" :isPublished="true" importantString="Value Passed"/>

    <NonPropAttributes id="non-prop-attr" class="title" title="Non Props Attributes Component" :likes="100" :isCompleted="true" /> -->

    <!-- <ComponentLevel1/> -->

    <!-- <ParentComponent /> -->

    <!-- <ValidatingEmittedEventFromChild /> -->

    <!-- <InputComp v-model="userVal"/> -->
    <!-- <SlotParent /> -->
    <!-- <DynamicCompParent /> -->
    <!-- <teleport to="#portal-root">
      <PortalRoot />
    </teleport> -->
    <!-- <HTTPGet /> -->
    <!-- <HTTPPost /> -->
    <ApiCallOnPageLoad />

  </div>
</template>

<script>
// import BindingText from './components/Binding-text.vue';
// import BindingHtml from './components/bindingHtml.vue'
// import BindingToAttributes from './components/BindingToAttributes.vue'
// import BindingInlineStyle from './components/BindingInlineStyle.vue'
// import ConditionalRendering from './components/Conditional-rendering.vue'
// import ListRendering from './components/List-Rendering.vue'
// import ConditionalListRendering from './components/Conditional-list-Rendering.vue'
// import MethodsRendering from './components/Methods.vue'
// import EventHandling from './components/EventHandling.vue'
// import FormHandling from './components/FormHandling.vue'
// import OnceAndPre from './components/once-and-pre.vue'
// import ComputedProperties from './components/computed-properties.vue'
// import ComputedPropertiesAndConditionalRendering from './components/ComputedProperties-and-ConditionalRendering.vue'
// import ComputedSetter from './components/Computed-setter.vue'
// import WatchersVue from './components/Watchers.vue'
// import ImmediateAndDeepWatchers from './components/immediate-and-Deep-watchers.vue'
// import ComponentProps from './components/component-props.vue'
// import PropTypesAndValidation from './components/propTypes-and-Validation.vue'
// import NonPropAttributes from './components/non-prop-attributes.vue'
// import ComponentLevel1 from './components/provide-and-inject/Component1.vue'
// import ParentComponent from './components/Component-events/Parent-Component.vue'
//import ValidatingEmittedEventFromChild from './components/Component-events/Validating-Emitted-events/Parent-Component.vue'
// import InputComp from './components/Components-and-V-model.vue'
// import SlotParent from './components/Slots/parentComp.vue'
//import DynamicCompParent from './components/Dynamic-Components/ParentComp.vue'
// import PortalRoot from './components/Teleport-component/Portal-root.vue'
// import HTTPGet from './components/HTTP/HTTP-Get'
// import HTTPPost from './components/HTTP/HTTP-Post.vue'
import ApiCallOnPageLoad from './components/HTTP/HTTP-onPageLoad'
export default {
  components: { 
    // BindingText, 
    // BindingHtml, 
    // BindingToAttributes, 
    // BindingInlineStyle, 
    // ConditionalRendering,
    // ListRendering,
    // ConditionalListRendering,
    // MethodsRendering,
    // EventHandling,
    // FormHandling,
    // OnceAndPre,
    // ComputedProperties,
    // ComputedPropertiesAndConditionalRendering,
    // ComputedSetter,
    // WatchersVue,
    // ImmediateAndDeepWatchers,
    // ComponentProps,
    // PropTypesAndValidation,
    // NonPropAttributes,
    // ComponentLevel1,
    // ParentComponent,
    //ValidatingEmittedEventFromChild,
    // InputComp,
    // SlotParent,
    // DynamicCompParent,
    // PortalRoot
    // HTTPGet
    // HTTPPost,
    ApiCallOnPageLoad
  },
  name: 'App',
  data(){
    return{
      name:"Saikumar",
      leader:"PSPK",
      lastName: 'Raghavapuram',
      userVal:""
    }
  },
  methods: {

  },
  computed:{
  },
  watch:{
  },
  provide(){
    return{
      userName: this.name
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.underline{
  text-decoration: underline;
}
.promoted{
  color: green;
}
.soldOut{
  color: red;
}
</style>
