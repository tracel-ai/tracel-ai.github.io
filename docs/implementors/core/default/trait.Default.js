(function() {var implementors = {
"burn_autodiff":[["impl&lt;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_autodiff/struct.Autodiff.html\" title=\"struct burn_autodiff::Autodiff\">Autodiff</a>&lt;B&gt;"]],
"burn_candle":[["impl&lt;F, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_candle/struct.Candle.html\" title=\"struct burn_candle::Candle\">Candle</a>&lt;F, I&gt;<span class=\"where fmt-newline\">where\n    F: FloatCandleElement + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    I: IntCandleElement + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"burn_candle/enum.CandleDevice.html\" title=\"enum burn_candle::CandleDevice\">CandleDevice</a>"]],
"burn_compute":[["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"burn_compute/server/trait.ComputeServer.html\" title=\"trait burn_compute::server::ComputeServer\">ComputeServer</a>, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_compute/tune/struct.Tuner.html\" title=\"struct burn_compute::tune::Tuner\">Tuner</a>&lt;S, C&gt;<span class=\"where fmt-newline\">where\n    S::<a class=\"associatedtype\" href=\"burn_compute/server/trait.ComputeServer.html#associatedtype.AutotuneKey\" title=\"type burn_compute::server::ComputeServer::AutotuneKey\">AutotuneKey</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_compute/storage/struct.StorageId.html\" title=\"struct burn_compute::storage::StorageId\">StorageId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_compute/memory_management/struct.SliceId.html\" title=\"struct burn_compute::memory_management::SliceId\">SliceId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_compute/memory_management/struct.ChunkId.html\" title=\"struct burn_compute::memory_management::ChunkId\">ChunkId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_compute/storage/struct.BytesStorage.html\" title=\"struct burn_compute::storage::BytesStorage\">BytesStorage</a>"]],
"burn_core":[["impl&lt;B: <a class=\"trait\" href=\"burn_core/tensor/backend/trait.Backend.html\" title=\"trait burn_core::tensor::backend::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/nn/loss/struct.CrossEntropyLoss.html\" title=\"struct burn_core::nn::loss::CrossEntropyLoss\">CrossEntropyLoss</a>&lt;B&gt;"],["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"burn_core/record/trait.PrecisionSettings.html\" title=\"trait burn_core::record::PrecisionSettings\">PrecisionSettings</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/record/struct.BinGzFileRecorder.html\" title=\"struct burn_core::record::BinGzFileRecorder\">BinGzFileRecorder</a>&lt;S&gt;"],["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"burn_core/record/trait.PrecisionSettings.html\" title=\"trait burn_core::record::PrecisionSettings\">PrecisionSettings</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/record/struct.JsonGzFileRecorder.html\" title=\"struct burn_core::record::JsonGzFileRecorder\">JsonGzFileRecorder</a>&lt;S&gt;"],["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"burn_core/record/trait.PrecisionSettings.html\" title=\"trait burn_core::record::PrecisionSettings\">PrecisionSettings</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/record/struct.BinBytesRecorder.html\" title=\"struct burn_core::record::BinBytesRecorder\">BinBytesRecorder</a>&lt;S&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/record/struct.DoublePrecisionSettings.html\" title=\"struct burn_core::record::DoublePrecisionSettings\">DoublePrecisionSettings</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/module/struct.ParamId.html\" title=\"struct burn_core::module::ParamId\">ParamId</a>"],["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"burn_core/record/trait.PrecisionSettings.html\" title=\"trait burn_core::record::PrecisionSettings\">PrecisionSettings</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/record/struct.NamedMpkFileRecorder.html\" title=\"struct burn_core::record::NamedMpkFileRecorder\">NamedMpkFileRecorder</a>&lt;S&gt;"],["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"burn_core/record/trait.PrecisionSettings.html\" title=\"trait burn_core::record::PrecisionSettings\">PrecisionSettings</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/record/struct.NamedMpkGzFileRecorder.html\" title=\"struct burn_core::record::NamedMpkGzFileRecorder\">NamedMpkGzFileRecorder</a>&lt;S&gt;"],["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"burn_core/record/trait.PrecisionSettings.html\" title=\"trait burn_core::record::PrecisionSettings\">PrecisionSettings</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/record/struct.BinFileRecorder.html\" title=\"struct burn_core::record::BinFileRecorder\">BinFileRecorder</a>&lt;S&gt;"],["impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/optim/struct.GradientsAccumulator.html\" title=\"struct burn_core::optim::GradientsAccumulator\">GradientsAccumulator</a>&lt;M&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/record/struct.FullPrecisionSettings.html\" title=\"struct burn_core::record::FullPrecisionSettings\">FullPrecisionSettings</a>"],["impl&lt;B: <a class=\"trait\" href=\"burn_core/tensor/backend/trait.Backend.html\" title=\"trait burn_core::tensor::backend::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/nn/loss/struct.MSELoss.html\" title=\"struct burn_core::nn::loss::MSELoss\">MSELoss</a>&lt;B&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/optim/struct.GradientsParams.html\" title=\"struct burn_core::optim::GradientsParams\">GradientsParams</a>"],["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"burn_core/record/trait.PrecisionSettings.html\" title=\"trait burn_core::record::PrecisionSettings\">PrecisionSettings</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/record/struct.NamedMpkBytesRecorder.html\" title=\"struct burn_core::record::NamedMpkBytesRecorder\">NamedMpkBytesRecorder</a>&lt;S&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/record/struct.HalfPrecisionSettings.html\" title=\"struct burn_core::record::HalfPrecisionSettings\">HalfPrecisionSettings</a>"],["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"burn_core/record/trait.PrecisionSettings.html\" title=\"trait burn_core::record::PrecisionSettings\">PrecisionSettings</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/record/struct.PrettyJsonFileRecorder.html\" title=\"struct burn_core::record::PrettyJsonFileRecorder\">PrettyJsonFileRecorder</a>&lt;S&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/nn/struct.ReLU.html\" title=\"struct burn_core::nn::ReLU\">ReLU</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/nn/struct.GELU.html\" title=\"struct burn_core::nn::GELU\">GELU</a>"],["impl&lt;B: <a class=\"trait\" href=\"burn_core/tensor/backend/trait.Backend.html\" title=\"trait burn_core::tensor::backend::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/nn/loss/struct.BinaryCrossEntropyLoss.html\" title=\"struct burn_core::nn::loss::BinaryCrossEntropyLoss\">BinaryCrossEntropyLoss</a>&lt;B&gt;"]],
"burn_fusion":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_fusion/struct.FusionProperties.html\" title=\"struct burn_fusion::FusionProperties\">FusionProperties</a>"],["impl&lt;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_fusion/struct.Fusion.html\" title=\"struct burn_fusion::Fusion\">Fusion</a>&lt;B&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_fusion/graph/struct.GreedyGraphExecution.html\" title=\"struct burn_fusion::graph::GreedyGraphExecution\">GreedyGraphExecution</a>"],["impl&lt;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"burn_fusion/trait.FusionBackend.html\" title=\"trait burn_fusion::FusionBackend\">FusionBackend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_fusion/struct.HandleContainer.html\" title=\"struct burn_fusion::HandleContainer\">HandleContainer</a>&lt;B&gt;<span class=\"where fmt-newline\">where\n    B::Device: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"]],
"burn_import":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"burn_import/burn/graph/enum.RecordType.html\" title=\"enum burn_import::burn::graph::RecordType\">RecordType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_import/onnx/struct.ModelGen.html\" title=\"struct burn_import::onnx::ModelGen\">ModelGen</a>"],["impl&lt;PS: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"burn_core/record/settings/trait.PrecisionSettings.html\" title=\"trait burn_core::record::settings::PrecisionSettings\">PrecisionSettings</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_import/burn/graph/struct.BurnGraph.html\" title=\"struct burn_import::burn::graph::BurnGraph\">BurnGraph</a>&lt;PS&gt;"]],
"burn_ndarray":[["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_ndarray/struct.NdArray.html\" title=\"struct burn_ndarray::NdArray\">NdArray</a>&lt;E&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"burn_ndarray/enum.NdArrayDevice.html\" title=\"enum burn_ndarray::NdArrayDevice\">NdArrayDevice</a>"]],
"burn_tch":[["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_tch/struct.LibTorch.html\" title=\"struct burn_tch::LibTorch\">LibTorch</a>&lt;E&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"burn_tch/enum.LibTorchDevice.html\" title=\"enum burn_tch::LibTorchDevice\">LibTorchDevice</a>"]],
"burn_tensor":[["impl&lt;ID&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_tensor/container/struct.TensorContainer.html\" title=\"struct burn_tensor::container::TensorContainer\">TensorContainer</a>&lt;ID&gt;<span class=\"where fmt-newline\">where\n    ID: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"]],
"burn_train":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_train/metric/struct.CpuTemperature.html\" title=\"struct burn_train::metric::CpuTemperature\">CpuTemperature</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_train/struct.TrainingInterrupter.html\" title=\"struct burn_train::TrainingInterrupter\">TrainingInterrupter</a>"],["impl&lt;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"burn_tensor/tensor/backend/base/trait.Backend.html\" title=\"trait burn_tensor::tensor::backend::base::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_train/metric/struct.AccuracyMetric.html\" title=\"struct burn_train::metric::AccuracyMetric\">AccuracyMetric</a>&lt;B&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_train/logger/struct.InMemoryMetricLogger.html\" title=\"struct burn_train::logger::InMemoryMetricLogger\">InMemoryMetricLogger</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_train/metric/struct.LearningRateMetric.html\" title=\"struct burn_train::metric::LearningRateMetric\">LearningRateMetric</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_train/metric/struct.CpuUse.html\" title=\"struct burn_train::metric::CpuUse\">CpuUse</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_train/metric/state/struct.NumericMetricState.html\" title=\"struct burn_train::metric::state::NumericMetricState\">NumericMetricState</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_train/metric/struct.CpuMemory.html\" title=\"struct burn_train::metric::CpuMemory\">CpuMemory</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_train/checkpoint/struct.ComposedCheckpointingStrategyBuilder.html\" title=\"struct burn_train::checkpoint::ComposedCheckpointingStrategyBuilder\">ComposedCheckpointingStrategyBuilder</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_train/metric/struct.CUDAMetric.html\" title=\"struct burn_train::metric::CUDAMetric\">CUDAMetric</a>"],["impl&lt;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"burn_tensor/tensor/backend/base/trait.Backend.html\" title=\"trait burn_tensor::tensor::backend::base::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_train/metric/struct.LossMetric.html\" title=\"struct burn_train::metric::LossMetric\">LossMetric</a>&lt;B&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_train/logger/struct.InMemoryLogger.html\" title=\"struct burn_train::logger::InMemoryLogger\">InMemoryLogger</a>"]],
"burn_wgpu":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_wgpu/struct.OpenGl.html\" title=\"struct burn_wgpu::OpenGl\">OpenGl</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_wgpu/struct.Dx11.html\" title=\"struct burn_wgpu::Dx11\">Dx11</a>"],["impl&lt;G, F, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_wgpu/struct.Wgpu.html\" title=\"struct burn_wgpu::Wgpu\">Wgpu</a>&lt;G, F, I&gt;<span class=\"where fmt-newline\">where\n    G: <a class=\"trait\" href=\"burn_wgpu/trait.GraphicsApi.html\" title=\"trait burn_wgpu::GraphicsApi\">GraphicsApi</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    F: <a class=\"trait\" href=\"burn_wgpu/trait.FloatElement.html\" title=\"trait burn_wgpu::FloatElement\">FloatElement</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    I: <a class=\"trait\" href=\"burn_wgpu/trait.IntElement.html\" title=\"trait burn_wgpu::IntElement\">IntElement</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"burn_wgpu/enum.WgpuDevice.html\" title=\"enum burn_wgpu::WgpuDevice\">WgpuDevice</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_wgpu/struct.WebGpu.html\" title=\"struct burn_wgpu::WebGpu\">WebGpu</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_wgpu/struct.AutoGraphicsApi.html\" title=\"struct burn_wgpu::AutoGraphicsApi\">AutoGraphicsApi</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_wgpu/struct.Dx12.html\" title=\"struct burn_wgpu::Dx12\">Dx12</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_wgpu/struct.Vulkan.html\" title=\"struct burn_wgpu::Vulkan\">Vulkan</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_wgpu/struct.Metal.html\" title=\"struct burn_wgpu::Metal\">Metal</a>"]],
"image_classification_web":[["impl&lt;B: <a class=\"trait\" href=\"burn_tensor/tensor/backend/base/trait.Backend.html\" title=\"trait burn_tensor::tensor::backend::base::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"image_classification_web/model/normalizer/struct.Normalizer.html\" title=\"struct image_classification_web::model::normalizer::Normalizer\">Normalizer</a>&lt;B&gt;"],["impl&lt;B: <a class=\"trait\" href=\"burn_tensor/tensor/backend/base/trait.Backend.html\" title=\"trait burn_tensor::tensor::backend::base::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"image_classification_web/model/squeezenet/struct.Model.html\" title=\"struct image_classification_web::model::squeezenet::Model\">Model</a>&lt;B&gt;"]],
"mnist":[["impl&lt;B: <a class=\"trait\" href=\"burn_tensor/tensor/backend/base/trait.Backend.html\" title=\"trait burn_tensor::tensor::backend::base::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"mnist/model/struct.Model.html\" title=\"struct mnist::model::Model\">Model</a>&lt;B&gt;"]],
"onnx_inference":[["impl&lt;B: <a class=\"trait\" href=\"burn_tensor/tensor/backend/base/trait.Backend.html\" title=\"trait burn_tensor::tensor::backend::base::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"onnx_inference/model/mnist/struct.Model.html\" title=\"struct onnx_inference::model::mnist::Model\">Model</a>&lt;B&gt;"]],
"xtask":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"xtask/runchecks/enum.CheckType.html\" title=\"enum xtask::runchecks::CheckType\">CheckType</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()