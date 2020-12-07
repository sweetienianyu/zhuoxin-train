<script>
export default{
  functional: true,
  render: (h, ctx) => {
    console.log(h)
    return ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props || {})
  }
}
</script>