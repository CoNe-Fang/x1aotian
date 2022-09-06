<template>
  <Grid
    class="intro"
    :row-count="2">

    <GridCell :span-set="[12, 6, 6, 6, 6]">
      <Card
        :color="color"
        title="Email">
        <p class="can">
          <Icon icon="uw" :path="icons.uw"/>
          <a href = "mailto:fangxt@uw.edu">
            fangxt@uw.edu
          </a>
          <br/>
        </p>
        <font size="1"><p/></font>
        <p class="can">
          <Icon icon="gmail" :path="icons.gmail"/>
          <a href = "mailto:fxt1998@gmail.com">
            fxt1998@gmail.com
          </a>
          <br/>
        </p>
      </Card>
    </GridCell>

    <GridCell :span-set="[12, 6, 6, 6, 6]">
      <Card
        :color="color"
        title="Professional">
        <p class="can">
          <Icon icon="github" :path="icons.github"/>
          <a href = "https://github.com/x1aotian">
            x1aotian
          </a>
          <br/>
        </p>
        <font size="1"><p/></font>
        <p class="can">
          <Icon icon="linkedin" :path="icons.linkedin"/>
          <a href = "https://www.linkedin.com/in/xiaotian-fang/">
            Xiaotian Fang
          </a>
          <br/>
        </p>
      </Card>
    </GridCell>

    <GridCell :span-set="[12, 6, 6, 6, 6]">
      <Card
        :color="color"
        title="Phone">
        <p class="can">
          <Icon icon="usa" :path="icons.usa"/>
          <a href = "tel:2064686899">
            +1  206 468 6899
          </a>
          <br/>
        </p>
        <font size="1"><p/></font>
        <p class="can">
          <Icon icon="china" :path="icons.china"/>
          <a href = "tel:8618221201067">
            +86  182 2120 1067
          </a>
          <br/>
        </p>
      </Card>
    </GridCell>

    <GridCell :span-set="[12, 6, 6, 6, 6]">
      <Card
        :color="color"
        title="Social">
        <p class="can">
          <Icon icon="facebook" :path="icons.facebook"/>
          <a href = "https://www.facebook.com/xiaotian.fang.587/">
            Xiaotian Fang
          </a>
          <br/>
        </p>
        <font size="1"><p/></font>
        <p class="can">
          <Icon icon="wechat" :path="icons.wechat"/>
            imfxt1998
          <br/>
        </p>
      </Card>
    </GridCell>

  </Grid>
</template>

<script>
  import Card from '@/components/layout/card/Card'
  import Grid from '@/components/layout/grid/Grid'

  import Icon from '@/components/common/icon/Icon'
  import colored from '@/mixins/colored'
  import usa from '@/assets/icons/usa.svg'
  import china from '@/assets/icons/china.svg'
  import gmail from '@/assets/icons/gmail.svg'
  import uw from '@/assets/icons/uw.svg'
  import github from '@/assets/icons/github.svg'
  import linkedin from '@/assets/icons/linkedin.svg'
  import wechat from '@/assets/icons/wechat.svg'
  import facebook from '@/assets/icons/facebook.svg'

  export default {
    name: 'Intro',
    mixins: [
      colored
    ],
    components: {
      Card,
      Grid,
      GridCell: Grid.Cell,
      Icon
    },
    data () {
      return {
        icons: {
          usa,
          china,
          gmail,
          uw,
          github,
          linkedin,
          wechat,
          facebook
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Intro.scss"/>
