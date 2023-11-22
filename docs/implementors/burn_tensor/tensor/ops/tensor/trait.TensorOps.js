(function() {var implementors = {
"burn":[],
"burn_autodiff":[["impl&lt;B: Backend&gt; TensorOps&lt;<a class=\"struct\" href=\"burn_autodiff/struct.Autodiff.html\" title=\"struct burn_autodiff::Autodiff\">Autodiff</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"burn_autodiff/struct.Autodiff.html\" title=\"struct burn_autodiff::Autodiff\">Autodiff</a>&lt;B&gt;"]],
"burn_candle":[["impl&lt;F: FloatCandleElement, I: IntCandleElement&gt; <a class=\"trait\" href=\"burn_tensor/tensor/ops/tensor/trait.TensorOps.html\" title=\"trait burn_tensor::tensor::ops::tensor::TensorOps\">TensorOps</a>&lt;<a class=\"struct\" href=\"burn_candle/struct.Candle.html\" title=\"struct burn_candle::Candle\">Candle</a>&lt;F, I&gt;&gt; for <a class=\"struct\" href=\"burn_candle/struct.Candle.html\" title=\"struct burn_candle::Candle\">Candle</a>&lt;F, I&gt;"]],
"burn_core":[],
"burn_fusion":[["impl&lt;B: <a class=\"trait\" href=\"burn_fusion/trait.FusionBackend.html\" title=\"trait burn_fusion::FusionBackend\">FusionBackend</a>&gt; TensorOps&lt;<a class=\"struct\" href=\"burn_fusion/struct.Fusion.html\" title=\"struct burn_fusion::Fusion\">Fusion</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"burn_fusion/struct.Fusion.html\" title=\"struct burn_fusion::Fusion\">Fusion</a>&lt;B&gt;"]],
"burn_ndarray":[["impl&lt;E: <a class=\"trait\" href=\"burn_ndarray/trait.FloatNdArrayElement.html\" title=\"trait burn_ndarray::FloatNdArrayElement\">FloatNdArrayElement</a>&gt; TensorOps&lt;<a class=\"struct\" href=\"burn_ndarray/struct.NdArray.html\" title=\"struct burn_ndarray::NdArray\">NdArray</a>&lt;E&gt;&gt; for <a class=\"struct\" href=\"burn_ndarray/struct.NdArray.html\" title=\"struct burn_ndarray::NdArray\">NdArray</a>&lt;E&gt;"]],
"burn_tch":[["impl&lt;E: <a class=\"trait\" href=\"burn_tch/trait.TchElement.html\" title=\"trait burn_tch::TchElement\">TchElement</a>&gt; <a class=\"trait\" href=\"burn_tensor/tensor/ops/tensor/trait.TensorOps.html\" title=\"trait burn_tensor::tensor::ops::tensor::TensorOps\">TensorOps</a>&lt;<a class=\"struct\" href=\"burn_tch/struct.LibTorch.html\" title=\"struct burn_tch::LibTorch\">LibTorch</a>&lt;E&gt;&gt; for <a class=\"struct\" href=\"burn_tch/struct.LibTorch.html\" title=\"struct burn_tch::LibTorch\">LibTorch</a>&lt;E&gt;"]],
"burn_wgpu":[["impl&lt;G, F, I&gt; TensorOps&lt;<a class=\"struct\" href=\"burn_wgpu/struct.Wgpu.html\" title=\"struct burn_wgpu::Wgpu\">Wgpu</a>&lt;G, F, I&gt;&gt; for <a class=\"struct\" href=\"burn_wgpu/struct.Wgpu.html\" title=\"struct burn_wgpu::Wgpu\">Wgpu</a>&lt;G, F, I&gt;<span class=\"where fmt-newline\">where\n    G: <a class=\"trait\" href=\"burn_wgpu/trait.GraphicsApi.html\" title=\"trait burn_wgpu::GraphicsApi\">GraphicsApi</a> + 'static,\n    F: <a class=\"trait\" href=\"burn_wgpu/trait.FloatElement.html\" title=\"trait burn_wgpu::FloatElement\">FloatElement</a>,\n    I: <a class=\"trait\" href=\"burn_wgpu/trait.IntElement.html\" title=\"trait burn_wgpu::IntElement\">IntElement</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()