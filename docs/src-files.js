var srcIndex = JSON.parse('{\
"backend_comparison":["",[],["lib.rs"]],\
"burn":["",[],["lib.rs"]],\
"burn_autodiff":["",[["graph",[],["backward.rs","base.rs","mod.rs","node.rs","requirement.rs","traversal.rs"]],["ops",[],["activation.rs","backward.rs","base.rs","bool_tensor.rs","int_tensor.rs","maxmin.rs","mod.rs","module.rs","tensor.rs"]],["tests",[],["abs.rs","adaptive_avgpool1d.rs","adaptive_avgpool2d.rs","add.rs","aggregation.rs","avgpool1d.rs","avgpool2d.rs","backward.rs","broadcast.rs","cat.rs","complex.rs","conv1d.rs","conv2d.rs","conv_transpose1d.rs","conv_transpose2d.rs","cos.rs","cross_entropy.rs","div.rs","erf.rs","exp.rs","gather_scatter.rs","gelu.rs","gradients.rs","log.rs","log1p.rs","mask.rs","matmul.rs","maxmin.rs","maxpool1d.rs","maxpool2d.rs","mod.rs","mul.rs","multithread.rs","neg.rs","pow.rs","recip.rs","relu.rs","reshape.rs","select.rs","sin.rs","slice.rs","softmax.rs","sqrt.rs","sub.rs","tanh.rs","transpose.rs"]]],["backend.rs","grads.rs","lib.rs","tensor.rs","utils.rs"]],\
"burn_candle":["",[["ops",[],["activation.rs","base.rs","bool_tensor.rs","candle_utils.rs","int_tensor.rs","mod.rs","module.rs","tensor.rs"]]],["backend.rs","element.rs","lib.rs","tensor.rs"]],\
"burn_common":["",[],["benchmark.rs","id.rs","lib.rs","rand.rs","reader.rs","stub.rs"]],\
"burn_compute":["",[["channel",[],["base.rs","cell.rs","mod.rs","mpsc.rs","mutex.rs"]],["memory_management",[],["base.rs","mod.rs","simple.rs"]],["storage",[],["base.rs","bytes_cpu.rs","mod.rs"]],["tune",[],["mod.rs","operation.rs","tune_benchmark.rs","tune_cache.rs","tuner.rs"]]],["client.rs","compute.rs","id.rs","lib.rs","server.rs"]],\
"burn_core":["",[["data",[["dataloader",[],["base.rs","batch.rs","batcher.rs","builder.rs","mod.rs","multithread.rs","strategy.rs"]]],["mod.rs"]],["grad_clipping",[],["base.rs","mod.rs"]],["lr_scheduler",[],["base.rs","constant.rs","mod.rs","noam.rs"]],["module",[["param",[],["base.rs","constant.rs","id.rs","mod.rs","primitive.rs","running.rs","tensor.rs","visitor.rs"]]],["base.rs","mod.rs"]],["nn",[["attention",[],["mask.rs","mha.rs","mod.rs"]],["cache",[],["autoregressive.rs","base.rs","mod.rs"]],["conv",[],["checks.rs","conv1d.rs","conv2d.rs","conv_transpose1d.rs","conv_transpose2d.rs","mod.rs"]],["loss",[],["binary_cross_entropy.rs","cross_entropy.rs","mod.rs","mse.rs","reduction.rs"]],["norm",[],["batch.rs","group.rs","layer.rs","mod.rs"]],["pool",[],["adaptive_avg_pool1d.rs","adaptive_avg_pool2d.rs","avg_pool1d.rs","avg_pool2d.rs","max_pool1d.rs","max_pool2d.rs","mod.rs"]],["rnn",[],["gate_controller.rs","gru.rs","lstm.rs","mod.rs"]],["transformer",[],["decoder.rs","encoder.rs","mod.rs","pwff.rs"]]],["dropout.rs","embedding.rs","gelu.rs","initializer.rs","linear.rs","mod.rs","padding.rs","pos_encoding.rs","relu.rs","unfold.rs"]],["optim",[["simple",[["record",[],["base.rs","mod.rs","v1.rs"]]],["adaptor.rs","base.rs","mod.rs"]]],["adagrad.rs","adam.rs","adamw.rs","base.rs","decay.rs","grad_accum.rs","grads.rs","mod.rs","momentum.rs","rmsprop.rs","sgd.rs","visitor.rs"]],["record",[],["base.rs","file.rs","memory.rs","mod.rs","primitive.rs","recorder.rs","settings.rs","tensor.rs"]]],["backend.rs","config.rs","lib.rs","tensor.rs"]],\
"burn_dataset":["",[["dataset",[],["base.rs","in_memory.rs","iterator.rs","mod.rs","sqlite.rs"]],["source",[["huggingface",[],["downloader.rs","mnist.rs","mod.rs"]]],["mod.rs"]],["transform",[],["composed.rs","mapper.rs","mod.rs","partial.rs","random.rs","sampler.rs"]]],["lib.rs"]],\
"burn_derive":["",[["config",[],["analyzer.rs","analyzer_enum.rs","analyzer_struct.rs","base.rs","mod.rs"]],["module",[],["base.rs","codegen.rs","codegen_struct.rs","display.rs","mod.rs","record.rs","record_struct.rs"]],["record",[],["base.rs","codegen.rs","codegen_struct.rs","mod.rs"]],["shared",[],["attribute.rs","field.rs","mod.rs"]]],["lib.rs"]],\
"burn_fusion":["",[["client",[],["base.rs","mod.rs","mutex.rs"]],["graph",[],["base.rs","execution.rs","mod.rs","ops.rs"]],["ops",[],["activation.rs","binary.rs","boolean.rs","float.rs","int.rs","mod.rs","module.rs","unary.rs"]]],["backend.rs","fusion.rs","handle.rs","lib.rs","server.rs","tensor.rs"]],\
"burn_import":["",[["burn",[["node",[],["avg_pool2d.rs","base.rs","batch_norm.rs","binary.rs","clip.rs","concat.rs","constant.rs","conv1d.rs","conv2d.rs","dropout.rs","gather.rs","global_avg_pool.rs","linear.rs","matmul.rs","max_pool2d.rs","mod.rs","reshape.rs","unary.rs"]]],["codegen.rs","graph.rs","imports.rs","mod.rs","scope.rs","ty.rs"]],["onnx",[["protos",[],["mod.rs"]]],["coalesce.rs","dim_inference.rs","from_onnx.rs","ir.rs","mod.rs","node_remap.rs","op_configuration.rs","proto_conversion.rs","to_burn.rs"]]],["formatter.rs","lib.rs","logger.rs"]],\
"burn_ndarray":["",[["ops",[],["activations.rs","adaptive_avgpool.rs","avgpool.rs","base.rs","bool_tensor.rs","conv.rs","int_tensor.rs","macros.rs","matmul.rs","maxpool.rs","mod.rs","module.rs","padding.rs","tensor.rs"]]],["backend.rs","element.rs","lib.rs","parallel.rs","sharing.rs","tensor.rs"]],\
"burn_no_std_tests":["",[],["conv.rs","lib.rs","mlp.rs","model.rs"]],\
"burn_tch":["",[["ops",[],["activation.rs","base.rs","bool_tensor.rs","int_tensor.rs","mod.rs","module.rs","tensor.rs"]]],["backend.rs","element.rs","lib.rs","tensor.rs"]],\
"burn_tensor":["",[["tensor",[["activation",[],["base.rs","mod.rs"]],["api",[],["autodiff.rs","base.rs","bool.rs","check.rs","float.rs","int.rs","kind.rs","mod.rs","numeric.rs"]],["backend",[],["base.rs","mod.rs"]],["loss",[],["mod.rs"]],["named",[],["base.rs","dims.rs","matmul.rs","mod.rs","swap_dims.rs"]],["ops",[["modules",[],["base.rs","conv.rs","mod.rs","pool.rs","unfold.rs"]]],["activation.rs","alias.rs","bool_tensor.rs","int_tensor.rs","mod.rs","tensor.rs"]],["stats",[],["mod.rs"]]],["container.rs","data.rs","element.rs","mod.rs","module.rs","shape.rs"]],["tests",[["activation",[],["gelu.rs","mod.rs","relu.rs","sigmoid.rs","silu.rs","softmax.rs","tanh_activation.rs"]],["module",[],["adaptive_avgpool1d.rs","adaptive_avgpool2d.rs","avgpool1d.rs","avgpool2d.rs","conv1d.rs","conv2d.rs","conv_transpose1d.rs","conv_transpose2d.rs","forward.rs","maxpool1d.rs","maxpool2d.rs","mod.rs","unfold4d.rs"]],["ops",[],["abs.rs","add.rs","aggregation.rs","arange.rs","arange_step.rs","arg.rs","cast.rs","cat.rs","clamp.rs","cos.rs","create_like.rs","div.rs","erf.rs","exp.rs","flatten.rs","full.rs","gather_scatter.rs","init.rs","iter_dim.rs","log.rs","log1p.rs","map_comparison.rs","mask.rs","matmul.rs","maxmin.rs","mod.rs","mul.rs","neg.rs","one_hot.rs","powf.rs","random.rs","recip.rs","repeat.rs","reshape.rs","select.rs","sin.rs","slice.rs","sqrt.rs","squeeze.rs","sub.rs","tanh.rs","transpose.rs"]],["stats",[],["cov.rs","diagonal.rs","display.rs","mod.rs","var.rs"]]],["clone_invariance.rs","mod.rs"]]],["lib.rs"]],\
"burn_tensor_testgen":["",[],["lib.rs"]],\
"burn_train":["",[["checkpoint",[["strategy",[],["base.rs","composed.rs","lastn.rs","metric.rs","mod.rs"]]],["async_checkpoint.rs","base.rs","file.rs","mod.rs"]],["learner",[["step",[],["mod.rs","train.rs"]]],["base.rs","builder.rs","classification.rs","early_stopping.rs","epoch.rs","log.rs","mod.rs","regression.rs","train_val.rs"]],["logger",[],["async_logger.rs","base.rs","file.rs","in_memory.rs","metric.rs","mod.rs"]],["metric",[["processor",[],["base.rs","full.rs","metrics.rs","minimal.rs","mod.rs"]],["store",[],["aggregate.rs","base.rs","client.rs","log.rs","mod.rs"]]],["acc.rs","base.rs","cpu_temp.rs","cpu_use.rs","cuda.rs","learning_rate.rs","loss.rs","memory_use.rs","mod.rs","state.rs"]],["renderer",[["tui",[],["base.rs","controls.rs","full_history.rs","metric_numeric.rs","metric_text.rs","mod.rs","plot_utils.rs","popup.rs","progress.rs","recent_history.rs","renderer.rs","status.rs"]]],["base.rs","mod.rs"]]],["components.rs","lib.rs"]],\
"burn_wgpu":["",[["compute",[],["base.rs","kernel.rs","mod.rs","server.rs","storage.rs","tune_key.rs"]],["fusion",[["codegen",[],["body.rs","function.rs","mod.rs","operator.rs","shader.rs","variable.rs"]],["elemwise",[],["mod.rs","ops.rs"]]],["base.rs","kernel.rs","mod.rs"]],["kernel",[["comparison",[],["base.rs","binary.rs","elem.rs","mod.rs"]],["conv",[],["conv2d.rs","conv_transpose2d.rs","mod.rs"]],["index",[],["gather.rs","mod.rs","scatter.rs","select.rs","slice.rs"]],["mask",[],["base.rs","mask_fill.rs","mask_where.rs","mod.rs"]],["matmul",[["tiling2d",[],["base.rs","mod.rs","padding.rs","unpadded.rs","vec4.rs","vec4_lhs.rs"]],["tune",[],["base.rs","key.rs","mod.rs"]]],["mem_coalescing.rs","mod.rs","naive.rs","utils.rs"]],["pool",[],["adaptive_avg_pool2d.rs","avg_pool2d.rs","base.rs","max_pool2d.rs","mod.rs"]],["prng",[],["base.rs","bernoulli.rs","mod.rs","normal.rs","uniform.rs"]],["reduce",[["tune",[],["base.rs","key.rs","mean_dim.rs","mod.rs","sum_dim.rs"]]],["base.rs","mod.rs","reduction.rs","reduction_shared_memory.rs"]]],["base.rs","binary_elemwise.rs","cast.rs","cat.rs","clamp.rs","mod.rs","source.rs","unary.rs","unary_scalar.rs"]],["ops",[],["activation_ops.rs","base.rs","bool_ops.rs","float_ops.rs","int_ops.rs","mod.rs","module_ops.rs","numeric.rs"]],["tensor",[],["base.rs","mod.rs"]]],["backend.rs","device.rs","element.rs","graphics.rs","lib.rs"]],\
"custom_renderer":["",[],["lib.rs"]],\
"custom_training_loop":["",[],["lib.rs"]],\
"custom_wgpu_kernel":["",[],["backward.rs","forward.rs","lib.rs"]],\
"guide":["",[],["data.rs","inference.rs","lib.rs","model.rs","training.rs"]],\
"image_classification_web":["",[["model",[],["label.rs","mod.rs","normalizer.rs","squeezenet.rs"]]],["lib.rs","web.rs"]],\
"mnist":["",[],["data.rs","lib.rs","model.rs","training.rs"]],\
"mnist_inference":["",[],["mnist_inference.rs"]],\
"mnist_inference_web":["",[],["lib.rs","model.rs","state.rs","web.rs"]],\
"named_tensor":["",[],["lib.rs"]],\
"onnx_inference":["",[["model",[],["mod.rs"]]],["lib.rs"]],\
"onnx_tests":["",[],["lib.rs"]],\
"text_classification":["",[["data",[],["batcher.rs","dataset.rs","mod.rs","tokenizer.rs"]]],["inference.rs","lib.rs","model.rs","training.rs"]],\
"text_generation":["",[["data",[],["batcher.rs","dataset.rs","mod.rs","tokenizer.rs"]]],["lib.rs","model.rs","training.rs"]],\
"xtask":["",[],["main.rs","publish.rs","runchecks.rs"]]\
}');
createSrcSidebar();
