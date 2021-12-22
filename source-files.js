var N = null;var sourcesIndex = {};
sourcesIndex["ahash"] = {"name":"","files":["convert.rs","fallback_hash.rs","hash_map.rs","hash_set.rs","lib.rs","operations.rs","random_state.rs","specialize.rs"]};
sourcesIndex["aho_corasick"] = {"name":"","dirs":[{"name":"packed","dirs":[{"name":"teddy","files":["compile.rs","mod.rs","runtime.rs"]}],"files":["api.rs","mod.rs","pattern.rs","rabinkarp.rs","vector.rs"]}],"files":["ahocorasick.rs","automaton.rs","buffer.rs","byte_frequencies.rs","classes.rs","dfa.rs","error.rs","lib.rs","nfa.rs","prefilter.rs","state_id.rs"]};
sourcesIndex["anyhow"] = {"name":"","files":["backtrace.rs","chain.rs","context.rs","ensure.rs","error.rs","fmt.rs","kind.rs","lib.rs","macros.rs","ptr.rs","wrapper.rs"]};
sourcesIndex["arrow2"] = {"name":"","dirs":[{"name":"array","dirs":[{"name":"binary","files":["ffi.rs","from.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"boolean","files":["ffi.rs","from.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"dictionary","files":["ffi.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"equal","files":["binary.rs","boolean.rs","dictionary.rs","fixed_size_binary.rs","fixed_size_list.rs","list.rs","map.rs","mod.rs","null.rs","primitive.rs","struct_.rs","union.rs","utf8.rs"]},{"name":"fixed_size_binary","files":["ffi.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"fixed_size_list","files":["ffi.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"growable","files":["binary.rs","boolean.rs","dictionary.rs","fixed_binary.rs","fixed_size_list.rs","list.rs","mod.rs","null.rs","primitive.rs","structure.rs","utf8.rs","utils.rs"]},{"name":"list","files":["ffi.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"map","files":["ffi.rs","iterator.rs","mod.rs"]},{"name":"primitive","files":["display.rs","ffi.rs","from_natural.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"struct_","files":["ffi.rs","iterator.rs","mod.rs"]},{"name":"union","files":["ffi.rs","iterator.rs","mod.rs"]},{"name":"utf8","files":["ffi.rs","from.rs","iterator.rs","mod.rs","mutable.rs"]}],"files":["display.rs","ffi.rs","mod.rs","null.rs","ord.rs","specification.rs"]},{"name":"bitmap","dirs":[{"name":"utils","dirs":[{"name":"chunk_iterator","files":["chunks_exact.rs","merge.rs","mod.rs"]}],"files":["fmt.rs","iterator.rs","mod.rs","slice_iterator.rs","zip_validity.rs"]}],"files":["bitmap_ops.rs","immutable.rs","mod.rs","mutable.rs"]},{"name":"buffer","files":["bytes.rs","immutable.rs","mod.rs"]},{"name":"compute","dirs":[{"name":"aggregate","dirs":[{"name":"simd","files":["mod.rs","native.rs"]}],"files":["memory.rs","min_max.rs","mod.rs","sum.rs"]},{"name":"arithmetics","dirs":[{"name":"basic","files":["add.rs","div.rs","mod.rs","mul.rs","pow.rs","rem.rs","sub.rs"]},{"name":"decimal","files":["add.rs","div.rs","mod.rs","mul.rs","sub.rs"]}],"files":["mod.rs","time.rs"]},{"name":"cast","files":["binary_to.rs","boolean_to.rs","dictionary_to.rs","mod.rs","primitive_to.rs","utf8_to.rs"]},{"name":"comparison","dirs":[{"name":"simd","files":["mod.rs","native.rs"]}],"files":["binary.rs","boolean.rs","mod.rs","primitive.rs","utf8.rs"]},{"name":"take","files":["binary.rs","boolean.rs","dict.rs","generic_binary.rs","list.rs","mod.rs","primitive.rs","structure.rs","utf8.rs"]}],"files":["arity.rs","boolean.rs","boolean_kleene.rs","concatenate.rs","filter.rs","if_then_else.rs","mod.rs","utils.rs"]},{"name":"datatypes","files":["field.rs","mod.rs","physical_type.rs","schema.rs"]},{"name":"ffi","files":["array.rs","bridge.rs","ffi.rs","mod.rs","schema.rs"]},{"name":"io","dirs":[{"name":"csv","dirs":[{"name":"write","files":["mod.rs","serialize.rs"]}],"files":["mod.rs"]}],"files":["iterator.rs","mod.rs"]},{"name":"scalar","files":["binary.rs","boolean.rs","dictionary.rs","equal.rs","list.rs","mod.rs","null.rs","primitive.rs","struct_.rs","utf8.rs"]},{"name":"types","dirs":[{"name":"simd","files":["mod.rs","native.rs"]}],"files":["bit_chunk.rs","index.rs","mod.rs","native.rs","offset.rs"]},{"name":"util","files":["lexical.rs","mod.rs"]}],"files":["error.rs","lib.rs","record_batch.rs","temporal_conversions.rs","trusted_len.rs"]};
sourcesIndex["atty"] = {"name":"","files":["lib.rs"]};
sourcesIndex["bstr"] = {"name":"","dirs":[{"name":"byteset","files":["mod.rs","scalar.rs"]},{"name":"unicode","dirs":[{"name":"fsm","files":["grapheme_break_fwd.rs","grapheme_break_rev.rs","mod.rs","regional_indicator_rev.rs","sentence_break_fwd.rs","simple_word_fwd.rs","whitespace_anchored_fwd.rs","whitespace_anchored_rev.rs","word_break_fwd.rs"]}],"files":["grapheme.rs","mod.rs","sentence.rs","whitespace.rs","word.rs"]}],"files":["ascii.rs","bstr.rs","bstring.rs","ext_slice.rs","ext_vec.rs","impls.rs","io.rs","lib.rs","utf8.rs"]};
sourcesIndex["byteorder"] = {"name":"","files":["io.rs","lib.rs"]};
sourcesIndex["cfg_if"] = {"name":"","files":["lib.rs"]};
sourcesIndex["chrono"] = {"name":"","dirs":[{"name":"format","files":["mod.rs","parse.rs","parsed.rs","scan.rs","strftime.rs"]},{"name":"naive","files":["date.rs","datetime.rs","internals.rs","isoweek.rs","time.rs"]},{"name":"offset","files":["fixed.rs","local.rs","mod.rs","utc.rs"]},{"name":"sys","files":["unix.rs"]}],"files":["date.rs","datetime.rs","div.rs","lib.rs","round.rs","sys.rs"]};
sourcesIndex["crossbeam_channel"] = {"name":"","dirs":[{"name":"flavors","files":["array.rs","at.rs","list.rs","mod.rs","never.rs","tick.rs","zero.rs"]}],"files":["channel.rs","context.rs","counter.rs","err.rs","lib.rs","select.rs","select_macro.rs","utils.rs","waker.rs"]};
sourcesIndex["crossbeam_deque"] = {"name":"","files":["deque.rs","lib.rs"]};
sourcesIndex["crossbeam_epoch"] = {"name":"","dirs":[{"name":"sync","files":["list.rs","mod.rs","queue.rs"]}],"files":["atomic.rs","collector.rs","default.rs","deferred.rs","epoch.rs","guard.rs","internal.rs","lib.rs"]};
sourcesIndex["crossbeam_utils"] = {"name":"","dirs":[{"name":"atomic","files":["atomic_cell.rs","consume.rs","mod.rs","seq_lock.rs"]},{"name":"sync","files":["mod.rs","parker.rs","sharded_lock.rs","wait_group.rs"]}],"files":["backoff.rs","cache_padded.rs","lib.rs","thread.rs"]};
sourcesIndex["csv"] = {"name":"","files":["byte_record.rs","cookbook.rs","deserializer.rs","error.rs","lib.rs","reader.rs","serializer.rs","string_record.rs","tutorial.rs","writer.rs"]};
sourcesIndex["csv_core"] = {"name":"","files":["lib.rs","reader.rs","writer.rs"]};
sourcesIndex["dirs"] = {"name":"","files":["lib.rs","lin.rs"]};
sourcesIndex["dirs_sys"] = {"name":"","files":["lib.rs","xdg_user_dirs.rs"]};
sourcesIndex["either"] = {"name":"","files":["lib.rs"]};
sourcesIndex["encode_unicode"] = {"name":"","files":["decoding_iterators.rs","errors.rs","lib.rs","traits.rs","utf16_char.rs","utf16_iterators.rs","utf8_char.rs","utf8_iterators.rs"]};
sourcesIndex["getrandom"] = {"name":"","files":["error.rs","error_impls.rs","lib.rs","linux_android.rs","use_file.rs","util.rs","util_libc.rs"]};
sourcesIndex["hash_hasher"] = {"name":"","files":["lib.rs"]};
sourcesIndex["hashbrown"] = {"name":"","dirs":[{"name":"external_trait_impls","dirs":[{"name":"rayon","files":["helpers.rs","map.rs","mod.rs","raw.rs","set.rs"]}],"files":["mod.rs"]},{"name":"raw","files":["alloc.rs","bitmask.rs","mod.rs","sse2.rs"]}],"files":["lib.rs","macros.rs","map.rs","scopeguard.rs","set.rs"]};
sourcesIndex["itertools"] = {"name":"","dirs":[{"name":"adaptors","files":["coalesce.rs","map.rs","mod.rs","multi_product.rs"]}],"files":["combinations.rs","combinations_with_replacement.rs","concat_impl.rs","cons_tuples_impl.rs","diff.rs","duplicates_impl.rs","either_or_both.rs","exactly_one_err.rs","flatten_ok.rs","format.rs","free.rs","group_map.rs","groupbylazy.rs","grouping_map.rs","impl_macros.rs","intersperse.rs","k_smallest.rs","kmerge_impl.rs","lazy_buffer.rs","lib.rs","merge_join.rs","minmax.rs","multipeek_impl.rs","pad_tail.rs","peek_nth.rs","peeking_take_while.rs","permutations.rs","powerset.rs","process_results_impl.rs","put_back_n_impl.rs","rciter_impl.rs","repeatn.rs","size_hint.rs","sources.rs","tee.rs","tuple_impl.rs","unique_impl.rs","unziptuple.rs","with_position.rs","zip_eq_impl.rs","zip_longest.rs","ziptuple.rs"]};
sourcesIndex["itoa"] = {"name":"","files":["lib.rs"]};
sourcesIndex["lazy_static"] = {"name":"","files":["inline_lazy.rs","lib.rs"]};
sourcesIndex["lexical"] = {"name":"","files":["lib.rs"]};
sourcesIndex["lexical_core"] = {"name":"","files":["lib.rs"]};
sourcesIndex["lexical_parse_float"] = {"name":"","files":["api.rs","bigint.rs","float.rs","index.rs","lemire.rs","lib.rs","limits.rs","mask.rs","number.rs","options.rs","parse.rs","shared.rs","slow.rs","table.rs","table_decimal.rs","table_large.rs","table_lemire.rs","table_small.rs"]};
sourcesIndex["lexical_parse_integer"] = {"name":"","files":["algorithm.rs","api.rs","lib.rs","options.rs","parse.rs","shared.rs"]};
sourcesIndex["lexical_util"] = {"name":"","files":["algorithm.rs","api.rs","ascii.rs","assert.rs","constants.rs","digit.rs","div128.rs","error.rs","extended_float.rs","format.rs","format_builder.rs","format_flags.rs","iterator.rs","lib.rs","mul.rs","noskip.rs","not_feature_format.rs","num.rs","options.rs","result.rs","step.rs"]};
sourcesIndex["lexical_write_float"] = {"name":"","files":["algorithm.rs","api.rs","float.rs","index.rs","lib.rs","options.rs","shared.rs","table.rs","table_dragonbox.rs","write.rs"]};
sourcesIndex["lexical_write_integer"] = {"name":"","files":["algorithm.rs","api.rs","decimal.rs","index.rs","lib.rs","options.rs","table.rs","table_decimal.rs","write.rs"]};
sourcesIndex["libc"] = {"name":"","dirs":[{"name":"unix","dirs":[{"name":"linux_like","dirs":[{"name":"linux","dirs":[{"name":"arch","dirs":[{"name":"generic","files":["mod.rs"]}],"files":["mod.rs"]},{"name":"gnu","dirs":[{"name":"b64","dirs":[{"name":"x86_64","files":["align.rs","mod.rs","not_x32.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["align.rs","mod.rs","non_exhaustive.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["fixed_width_ints.rs","lib.rs","macros.rs"]};
sourcesIndex["memchr"] = {"name":"","dirs":[{"name":"memchr","dirs":[{"name":"x86","files":["avx.rs","mod.rs","sse2.rs"]}],"files":["fallback.rs","iter.rs","mod.rs","naive.rs"]},{"name":"memmem","dirs":[{"name":"prefilter","dirs":[{"name":"x86","files":["avx.rs","mod.rs","sse.rs"]}],"files":["fallback.rs","genericsimd.rs","mod.rs"]},{"name":"x86","files":["avx.rs","mod.rs","sse.rs"]}],"files":["byte_frequencies.rs","genericsimd.rs","mod.rs","rabinkarp.rs","rarebytes.rs","twoway.rs","util.rs","vector.rs"]}],"files":["cow.rs","lib.rs"]};
sourcesIndex["memmap2"] = {"name":"","files":["lib.rs","unix.rs"]};
sourcesIndex["memoffset"] = {"name":"","files":["lib.rs","offset_of.rs","raw_field.rs","span_of.rs"]};
sourcesIndex["multiversion"] = {"name":"","files":["lib.rs"]};
sourcesIndex["multiversion_macros"] = {"name":"","files":["dispatcher.rs","lib.rs","meta.rs","multiversion.rs","safe_inner.rs","static_dispatch.rs","target.rs","target_cfg.rs","util.rs"]};
sourcesIndex["num"] = {"name":"","files":["lib.rs"]};
sourcesIndex["num_bigint"] = {"name":"","dirs":[{"name":"bigint","files":["addition.rs","bits.rs","convert.rs","division.rs","multiplication.rs","power.rs","shift.rs","subtraction.rs"]},{"name":"biguint","files":["addition.rs","bits.rs","convert.rs","division.rs","iter.rs","monty.rs","multiplication.rs","power.rs","shift.rs","subtraction.rs"]}],"files":["bigint.rs","biguint.rs","lib.rs","macros.rs"]};
sourcesIndex["num_complex"] = {"name":"","files":["cast.rs","lib.rs","pow.rs"]};
sourcesIndex["num_cpus"] = {"name":"","files":["lib.rs","linux.rs"]};
sourcesIndex["num_integer"] = {"name":"","files":["average.rs","lib.rs","roots.rs"]};
sourcesIndex["num_iter"] = {"name":"","files":["lib.rs"]};
sourcesIndex["num_rational"] = {"name":"","files":["lib.rs","pow.rs"]};
sourcesIndex["num_traits"] = {"name":"","dirs":[{"name":"ops","files":["checked.rs","inv.rs","mod.rs","mul_add.rs","overflowing.rs","saturating.rs","wrapping.rs"]}],"files":["bounds.rs","cast.rs","float.rs","identities.rs","int.rs","lib.rs","macros.rs","pow.rs","real.rs","sign.rs"]};
sourcesIndex["once_cell"] = {"name":"","files":["lib.rs","race.rs"]};
sourcesIndex["polars"] = {"name":"","dirs":[{"name":"docs","files":["eager.rs","lazy.rs","mod.rs","performance.rs"]}],"files":["lib.rs","prelude.rs"]};
sourcesIndex["polars_arrow"] = {"name":"","dirs":[{"name":"array","files":["default_arrays.rs","mod.rs"]},{"name":"compute","files":["cast.rs","mod.rs"]},{"name":"io","files":["mod.rs"]},{"name":"kernels","dirs":[{"name":"rolling","files":["mod.rs","no_nulls.rs","nulls.rs"]}],"files":["float.rs","list.rs","mod.rs","set.rs","take.rs","take_agg.rs"]},{"name":"trusted_len","files":["boolean.rs","mod.rs","rev.rs"]}],"files":["bit_util.rs","error.rs","index.rs","is_valid.rs","lib.rs","prelude.rs","utils.rs"]};
sourcesIndex["polars_core"] = {"name":"","dirs":[{"name":"chunked_array","dirs":[{"name":"builder","files":["boolean.rs","from.rs","list.rs","mod.rs","primitive.rs","utf8.rs"]},{"name":"iterator","files":["mod.rs"]},{"name":"kernels","files":["mod.rs","take.rs","temporal.rs"]},{"name":"list","files":["iterator.rs","mod.rs"]},{"name":"logical","files":["date.rs","datetime.rs","mod.rs","time.rs"]},{"name":"ops","dirs":[{"name":"take","files":["mod.rs","take_every.rs","take_random.rs","take_single.rs","traits.rs"]},{"name":"unique","files":["mod.rs"]}],"files":["aggregate.rs","any_value.rs","append.rs","apply.rs","bit_repr.rs","chunkops.rs","compare_inner.rs","downcast.rs","explode.rs","fill_null.rs","filter.rs","full.rs","len.rs","mod.rs","peaks.rs","reverse.rs","rolling_window.rs","set.rs","shift.rs","sort.rs","zip.rs"]},{"name":"temporal","files":["conversion.rs","date.rs","datetime.rs","mod.rs","truncate.rs","utf8.rs"]}],"files":["arithmetic.rs","bitwise.rs","boolean.rs","cast.rs","comparison.rs","float.rs","mod.rs","trusted_len.rs","upstream_traits.rs"]},{"name":"doc","dirs":[{"name":"changelog","files":["mod.rs","v0_10_0_11.rs","v0_3.rs","v0_4.rs","v0_5.rs","v0_6.rs","v0_7.rs","v0_8.rs","v0_9.rs"]}],"files":["mod.rs","time.rs"]},{"name":"frame","dirs":[{"name":"groupby","files":["aggregations.rs","hashing.rs","mod.rs"]},{"name":"hash_join","files":["mod.rs","multiple_keys.rs"]}],"files":["arithmetic.rs","explode.rs","mod.rs","select.rs","upstream_traits.rs"]},{"name":"series","dirs":[{"name":"implementations","files":["boolean.rs","dates_time.rs","floats.rs","list.rs","mod.rs","utf8.rs"]},{"name":"ops","files":["mod.rs","null.rs","to_list.rs"]}],"files":["arithmetic.rs","comparison.rs","from.rs","into.rs","iterator.rs","mod.rs","series_trait.rs","unstable.rs"]},{"name":"utils","files":["mod.rs","series.rs"]}],"files":["datatypes.rs","error.rs","export.rs","fmt.rs","functions.rs","lib.rs","named_from.rs","prelude.rs","testing.rs","time.rs","vector_hasher.rs"]};
sourcesIndex["polars_io"] = {"name":"","dirs":[{"name":"csv_core","files":["buffer.rs","csv.rs","mod.rs","parser.rs","utils.rs"]}],"files":["csv.rs","lib.rs","mmap.rs","prelude.rs","utils.rs"]};
sourcesIndex["polars_lazy"] = {"name":"","files":["lib.rs"]};
sourcesIndex["polars_time"] = {"name":"","files":["bounds.rs","calendar.rs","duration.rs","export.rs","groupby.rs","lib.rs","unit.rs","window.rs"]};
sourcesIndex["prettytable"] = {"name":"","files":["cell.rs","csv.rs","format.rs","lib.rs","row.rs","utils.rs"]};
sourcesIndex["proc_macro2"] = {"name":"","files":["detection.rs","fallback.rs","lib.rs","marker.rs","parse.rs","wrapper.rs"]};
sourcesIndex["quote"] = {"name":"","files":["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]};
sourcesIndex["rayon"] = {"name":"","dirs":[{"name":"collections","files":["binary_heap.rs","btree_map.rs","btree_set.rs","hash_map.rs","hash_set.rs","linked_list.rs","mod.rs","vec_deque.rs"]},{"name":"compile_fail","files":["cannot_collect_filtermap_data.rs","cannot_zip_filtered_data.rs","cell_par_iter.rs","mod.rs","must_use.rs","no_send_par_iter.rs","rc_par_iter.rs"]},{"name":"iter","dirs":[{"name":"collect","files":["consumer.rs","mod.rs"]},{"name":"find_first_last","files":["mod.rs"]},{"name":"plumbing","files":["mod.rs"]}],"files":["chain.rs","chunks.rs","cloned.rs","copied.rs","empty.rs","enumerate.rs","extend.rs","filter.rs","filter_map.rs","find.rs","flat_map.rs","flat_map_iter.rs","flatten.rs","flatten_iter.rs","fold.rs","for_each.rs","from_par_iter.rs","inspect.rs","interleave.rs","interleave_shortest.rs","intersperse.rs","len.rs","map.rs","map_with.rs","mod.rs","multizip.rs","noop.rs","once.rs","panic_fuse.rs","par_bridge.rs","positions.rs","product.rs","reduce.rs","repeat.rs","rev.rs","skip.rs","splitter.rs","step_by.rs","sum.rs","take.rs","try_fold.rs","try_reduce.rs","try_reduce_with.rs","unzip.rs","update.rs","while_some.rs","zip.rs","zip_eq.rs"]},{"name":"slice","files":["mergesort.rs","mod.rs","quicksort.rs"]}],"files":["array.rs","delegate.rs","lib.rs","math.rs","option.rs","par_either.rs","prelude.rs","private.rs","range.rs","range_inclusive.rs","result.rs","split_producer.rs","str.rs","string.rs","vec.rs"]};
sourcesIndex["rayon_core"] = {"name":"","dirs":[{"name":"compile_fail","files":["mod.rs","quicksort_race1.rs","quicksort_race2.rs","quicksort_race3.rs","rc_return.rs","rc_upvar.rs","scope_join_bad.rs"]},{"name":"join","files":["mod.rs"]},{"name":"scope","files":["mod.rs"]},{"name":"sleep","files":["counters.rs","mod.rs"]},{"name":"spawn","files":["mod.rs"]},{"name":"thread_pool","files":["mod.rs"]}],"files":["job.rs","latch.rs","lib.rs","log.rs","private.rs","registry.rs","unwind.rs"]};
sourcesIndex["regex"] = {"name":"","dirs":[{"name":"literal","files":["imp.rs","mod.rs"]}],"files":["backtrack.rs","compile.rs","dfa.rs","error.rs","exec.rs","expand.rs","find_byte.rs","input.rs","lib.rs","pikevm.rs","pool.rs","prog.rs","re_builder.rs","re_bytes.rs","re_set.rs","re_trait.rs","re_unicode.rs","sparse.rs","utf8.rs"]};
sourcesIndex["regex_automata"] = {"name":"","files":["byteorder.rs","classes.rs","dense.rs","dfa.rs","lib.rs","regex.rs","sparse.rs","state_id.rs"]};
sourcesIndex["regex_syntax"] = {"name":"","dirs":[{"name":"ast","files":["mod.rs","parse.rs","print.rs","visitor.rs"]},{"name":"hir","dirs":[{"name":"literal","files":["mod.rs"]}],"files":["interval.rs","mod.rs","print.rs","translate.rs","visitor.rs"]},{"name":"unicode_tables","files":["age.rs","case_folding_simple.rs","general_category.rs","grapheme_cluster_break.rs","mod.rs","perl_word.rs","property_bool.rs","property_names.rs","property_values.rs","script.rs","script_extension.rs","sentence_break.rs","word_break.rs"]}],"files":["either.rs","error.rs","lib.rs","parser.rs","unicode.rs","utf8.rs"]};
sourcesIndex["ryu"] = {"name":"","dirs":[{"name":"buffer","files":["mod.rs"]},{"name":"pretty","files":["exponent.rs","mantissa.rs","mod.rs"]}],"files":["common.rs","d2s.rs","d2s_full_table.rs","d2s_intrinsics.rs","digit_table.rs","f2s.rs","f2s_intrinsics.rs","lib.rs"]};
sourcesIndex["scopeguard"] = {"name":"","files":["lib.rs"]};
sourcesIndex["serde"] = {"name":"","dirs":[{"name":"de","files":["ignored_any.rs","impls.rs","mod.rs","seed.rs","utf8.rs","value.rs"]},{"name":"private","files":["de.rs","doc.rs","mod.rs","ser.rs","size_hint.rs"]},{"name":"ser","files":["fmt.rs","impls.rs","impossible.rs","mod.rs"]}],"files":["integer128.rs","lib.rs","macros.rs"]};
sourcesIndex["simdutf8"] = {"name":"","dirs":[{"name":"implementation","dirs":[{"name":"x86","files":["avx2.rs","mod.rs","sse42.rs"]}],"files":["algorithm.rs","helpers.rs","mod.rs"]}],"files":["basic.rs","compat.rs","lib.rs"]};
sourcesIndex["static_assertions"] = {"name":"","files":["assert_cfg.rs","assert_eq_align.rs","assert_eq_size.rs","assert_fields.rs","assert_impl.rs","assert_obj_safe.rs","assert_trait.rs","assert_type.rs","const_assert.rs","lib.rs"]};
sourcesIndex["streaming_iterator"] = {"name":"","files":["lib.rs"]};
sourcesIndex["strength_reduce"] = {"name":"","files":["lib.rs","long_division.rs","long_multiplication.rs"]};
sourcesIndex["syn"] = {"name":"","dirs":[{"name":"gen","files":["clone.rs","debug.rs","eq.rs","gen_helper.rs","hash.rs","visit.rs","visit_mut.rs"]}],"files":["attr.rs","await.rs","bigint.rs","buffer.rs","custom_keyword.rs","custom_punctuation.rs","data.rs","derive.rs","discouraged.rs","error.rs","export.rs","expr.rs","ext.rs","file.rs","generics.rs","group.rs","ident.rs","item.rs","lib.rs","lifetime.rs","lit.rs","lookahead.rs","mac.rs","macros.rs","op.rs","parse.rs","parse_macro_input.rs","parse_quote.rs","pat.rs","path.rs","print.rs","punctuated.rs","reserved.rs","sealed.rs","span.rs","spanned.rs","stmt.rs","thread.rs","token.rs","tt.rs","ty.rs","verbatim.rs","whitespace.rs"]};
sourcesIndex["term"] = {"name":"","dirs":[{"name":"terminfo","dirs":[{"name":"parser","files":["compiled.rs","names.rs"]}],"files":["mod.rs","parm.rs","searcher.rs"]}],"files":["lib.rs"]};
sourcesIndex["thiserror"] = {"name":"","files":["aserror.rs","display.rs","lib.rs"]};
sourcesIndex["thiserror_impl"] = {"name":"","files":["ast.rs","attr.rs","expand.rs","fmt.rs","generics.rs","lib.rs","prop.rs","valid.rs"]};
sourcesIndex["time"] = {"name":"","files":["display.rs","duration.rs","lib.rs","parse.rs","sys.rs"]};
sourcesIndex["unicode_width"] = {"name":"","files":["lib.rs","tables.rs"]};
sourcesIndex["unicode_xid"] = {"name":"","files":["lib.rs","tables.rs"]};
sourcesIndex["unsafe_unwrap"] = {"name":"","files":["lib.rs"]};
createSourceSidebar();
